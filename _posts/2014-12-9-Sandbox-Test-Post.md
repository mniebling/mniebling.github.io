---
layout: post
title: Sandbox Test Post
---

This post is a sandbox to test various features of the site.


Here is a section with an image. I've added a bit more text to this paragraph so that we likely wrap to a couple lines. The image is of the larger size and disposition.
<figure>![alt text]({{site.img}}/testpost/1.png)</figure>

Here is a section with an image. I've added a bit more text to this paragraph so that we likely wrap to a couple lines. The image is of the smaller size and disposition.
<figure>![alt text]({{site.img}}/testpost/2.png)</figure>

## This is a level-2 header (h2 tag)

### This is a level-3 header (h3 tag)

This is some **bold text**.

This is some *italicized text*.

**Numbered list:**

1. This is a numbered list
2. This is the 2nd number
3. This is the 3rd number

**Bulleted list:**

- This is a bulleted list
- This is the 2nd bullet
- This is the 3rd bullet

Here is a block quote:

> By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest. -Confucius

Here is some inline code `function (param)` with single backtick.

Here is a block of code with triple backtick:

```javascript
function doSomething (parameter) {

	// this is really important
	return parameter + " something!";
}
```

site.name: {{ site.name }}

site.description: {{ site.description }}

site.avatar: ![alt text]({{ site.avatar }})
