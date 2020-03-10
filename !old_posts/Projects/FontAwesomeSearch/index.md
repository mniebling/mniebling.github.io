---
layout: post
title: FontAwesome Search
date: 2015-02-21
---

FontAwesomeSearch is a simple [website](https://mniebling.github.io/FontAwesomeSearch) for quickly finding and copying FontAwesome icons. I initially built it so that I could search FontAwesome from an [Alfred](http://www.alfredapp.com) launcher prompt for maximum speed.

From a UX design perspective, there's nothing earthshattering in this project. But it was a good learning experience in a few different areas.

### Adaptive Design

Although the main use case for this site is desktop-based, I did want to think through how the UI could work on smaller screens. The main goal is to get a glyph onto the clipboard, which can happen by copying straight from the list:

![FontAwesome Search: 1]({{site.img}}/projects/fontawesomesearch/1.png)

However, the secondary goal is to see the metadata about the glyphs (name, unicode point, html for use, etc). In the full-width view this is accomplished by clicking a row, which populates the preview panel:

![FontAwesome Search: 2]({{site.img}}/projects/fontawesomesearch/2.png)

In a narrow viewport where the preview panel won't fit, I decided to instead provide a link in each row to the FontAwesome page for that icon. The FontAwesome page includes all the same information that is in the  preview panel at the cost of only one extra click/tap.

![FontAwesome Search: 3]({{site.img}}/projects/fontawesomesearch/3.png)

### Performance

In the earlier days of FontAwesome, there were only a few hundred glyphs and my naive approach was nice and snappy. Every time the user typed a character the code went through the whole dataset, building a string for each icon and its aliases, comparing it to the target string, finding the appropriate DOM element and showing or hiding it as necessary:

```javascript
var target = $inputSearch.val();

// Check all the data to see if they match the search string
for (var i = 0, max = icons.length; i < max; i++) {

	// Build a string that matches what appears in the UI
	// Every row has a name, but not all rows have aliases
	var iconString = icons[i].iconName;
	if (icons[i].aliases) {
		iconString = iconString + ', ' + icons[i].aliases;
	}

	// Do the actual check and row show/hides
	if(iconString.indexOf(target) != -1) {
		fadeInIfNecessary($('#' + icons[i].iconName));
		listIsEmpty = false;
	}
	else {
		fadeOutIfNecessary($('#' + icons[i].iconName));
	}
}
```

It worked, but with the jQuery selector happening inside the loop, the approach became noticeably choppy as the icon set got up around 400. I chatted up one of my front-end JS buddies and he talked me through a much more performant solution.

Now, to avoid the DOM lookup inside the for loop, we set up a dictionary right off the bat where the keys are the target strings and the values are the *actual* DOM elements:

```javascript
// Set up a dictionary of names and elements
var nameToElement = {};

$('tr.icon-row').each(function (index) {
	var nameAndAliases = $(this).find('td.name').text().trim();
	nameToElement[nameAndAliases] = this;
});
```

Which makes the actual update much cheaper, because we can take action directly on the DOM without having to traverse it:

```javascript
// Check rows for matches and show/hide accordingly
for (var key in nameToElement) {

	// Hide if it doesn't match
	if (key.indexOf(target) === -1) {
		fadeOutIfNecessary(nameToElement[key]);
	}

	// Otherwise, show
	else {
		fadeInIfNecessary(nameToElement[key]);
		listIsEmpty = false;
	}
}
```

Boom! The search and updates are now lightning fast.
