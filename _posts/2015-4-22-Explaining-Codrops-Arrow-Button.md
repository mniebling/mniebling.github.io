---
layout: post
title: "Explaining Codrops #1: Arrow Button"
---

The folks over at [Codrops](http://tympanus.net/codrops/) put out a lot of cool demos for slick front-end UI effects. Oftentimes, I'll find myself wanting to use one of their styles but then having to dig through their  code and figure out which parts are specific to the effect I want (vs. which parts are for styling their demo pages).

So, in this series (will it be a series? I don't know, but I'm starting to number them just in case!), I plan to take a look at the CSS of some of the Codrops effects I really like and go through it step-by-step. At the end there should be a pretty self-contained piece of code and hopefully a good how-to for implementing similar effects from scratch.

For this post, I'm looking at their animated arrow button, in the green section on [this page](http://tympanus.net/Development/CreativeButtons/). I think this is a nice, polished effect that doesn't go over the top or slow the user down, while still giving some helpful feedback (the forward arrow could indicate moving to a different page).


### The basic button

First, let's set up some styles for the basic button. In our markup, we'll use a `btn` class for some basic styles and a `btn-arrow` class for styles that are specific to this effect. That way, it's easy to drop this into a project with already existing buttons.

Most of these styles don't matter to the final product, but one thing that's going to be critical later is making sure the button has `position: relative` set. This is to create a parent [positioning context](http://blog.teamtreehouse.com/css-positioning) so that we can absolutely position the arrow later.

```html
<button class="btn btn-arrow">
  <span>Continue</span>
</button>
```

```css
.btn {
  position: relative;
  padding: 0.8rem 3rem;
  font-size: 1rem;

  background-color: #00BF87;
  border: 1px solid #00BF87;
  color: #fff;

  cursor: pointer;
  outline: 0;

  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.btn:hover {
  background: #01AD7B;
}
```

Here's how this should look so far, a very plain basic button:

<p data-height="98" data-theme-id="12949" data-slug-hash="doyzxv" data-default-tab="result" data-user="mniebling" class='codepen'>See the Pen <a href='http://codepen.io/mniebling/pen/doyzxv/'>Codrops Arrow Button</a> by Mike Niebling (<a href='http://codepen.io/mniebling'>@mniebling</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Adding the arrow

Next, we'll get the arrow in place. We're going to use a Unicode arrow ([➔](http://copypastecharacter.com/arrows)), but you could also use an iconfont glyph, an image, or anything really.

To start, we use the `:before` pseudo-element to render the arrow. One useful trick here is that because our parent is relative, we can use the [transform/top method](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/) to vertically center the arrow even if the button size changes.

```css
.btn-arrow:before {
  content: "➔";
  position: absolute;
  left: 65%;
  font-size: 125%;
  color: #FFF;

  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;

  /* vertically center */
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
```

This gives a button with an arrow, alright. But it's not very attractive (don't worry, we'll hide it next). Pay attention to the value of `left: 65%` in this step -- this is how you would tweak the starting position of the arrow's animation.

<p data-height="98" data-theme-id="12949" data-slug-hash="NqWaPE" data-default-tab="result" data-user="mniebling" class='codepen'>See the Pen <a href='http://codepen.io/mniebling/pen/NqWaPE/'>Codrops Arrow Button (2)</a> by Mike Niebling (<a href='http://codepen.io/mniebling'>@mniebling</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Animating the arrow

We want the arrow to start invisible, and then fade into view as it slides from the left to the right. So we go back and add `opacity: 0` to the `.btn-arrow` class, then add the following selector:

```css
.btn-arrow:hover:before {
  left: 75%;
  opacity: 1;
}
```

Here, `left: 75%` sets the ending position of the arrow, which may need to be tweaked depending on the button size, the icon size, etc. Now we are looking a little closer to the demo.

<p data-height="98" data-theme-id="12949" data-slug-hash="BNawoP" data-default-tab="result" data-user="mniebling" class='codepen'>See the Pen <a href='http://codepen.io/mniebling/pen/BNawoP/'>Codrops Arrow Button (3)</a> by Mike Niebling (<a href='http://codepen.io/mniebling'>@mniebling</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


### Last but not least... polish

We've got the arrow looking good, but many of Codrops' effects also have cool `active` states. We'll change the color and add a small shrinking animation to give the user feedback when they click or tap the button.

```css
.btn:active {
  border-color: #009166;
  background-color: #009166;

  -webkit-transform: scale(0.95);
  transform: scale(0.95);
}
```

Here's the final result:

<p data-height="98" data-theme-id="12949" data-slug-hash="rVNGxV" data-default-tab="result" data-user="mniebling" class='codepen'>See the Pen <a href='http://codepen.io/mniebling/pen/rVNGxV/'>Codrops Arrow Button (4)</a> by Mike Niebling (<a href='http://codepen.io/mniebling'>@mniebling</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Not too bad!
