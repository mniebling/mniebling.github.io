---
title: "Breaking Down The Codrops Arrow Button"
date: 2015-04-22
categories:
- design
---

The folks over at [Codrops](http://tympanus.net/codrops/) put out a lot of cool demos for slick front-end UI effects. Oftentimes, I'll find myself wanting to use one of their styles but then having to dig through their  code and figure out which parts are specific to the effect I want vs. which parts are for styling their demo pages.

So, in this series, I plan to take a look at the CSS of some of the Codrops effects I really like and go through it step-by-step. At the end there should be a pretty self-contained piece of code and hopefully a good how-to for implementing similar effects from scratch.

For this post, I'm looking at their animated arrow button, in the green section on [this page](http://tympanus.net/Development/CreativeButtons/). Here's what ours will look like when it's done:

<button class="post-btn post-btn-2 post-btn-3 post-btn-4"><span>Login</span></button>

I think this is a nice, polished effect that doesn't go over the top or slow the user down, while still giving some helpful feedback (the forward arrow could indicate moving to a different page).


### The basic button

First, let's set up some styles for the basic button. In our markup, we'll use a `btn` class for some basic styles and a `btn-arrow` class for styles that are specific to this effect. That way, it's easy to drop this into a project with already existing buttons.

Most of these styles don't matter to the final product, but one thing that's going to be critical later is making sure the button has `position: relative` set. This is to create a parent [positioning context](http://blog.teamtreehouse.com/css-positioning) so that we can absolutely position the arrow later.

```html
<button class="btn btn-arrow">
  <span>Login</span>
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

<button class="post-btn"><span>Login</span></button>


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

This gives a button with an arrow, alright. But it's not very attractive (don't worry, we'll hide it next).

<button class="post-btn post-btn-2"><span>Login</span></button>

Pay attention to the value of `left: 65%` in this step -- this is how you would tweak the starting position of the arrow's animation.


### Animating the arrow

We want the arrow to start invisible, and then fade into view as it slides from the left to the right. So we go back and add `opacity: 0` to the `.btn-arrow` class, then add the following selector:

```css
.btn-arrow:hover:before {
  left: 75%;
  opacity: 1;
}
```

Here, `left: 75%` sets the ending position of the arrow, which may need to be tweaked depending on the button size, the icon size, etc. Now we are looking a little closer to the demo.

<button class="post-btn post-btn-2 post-btn-3"><span>Login</span></button>


### Last but not least... polish

We've got the arrow looking good, but many of Codrops' effects also have cool `active` states. We'll change the color and add a small shrinking animation to give the user feedback when they click or tap the button. (Since we're shrinking the button, remember that we need to shrink the arrow as well.)

```css
.btn:active {
  border-color: #009166;
  background-color: #009166;

  -webkit-transform: scale(0.95);
  transform: scale(0.95);
}

.btn-arrow:active:before {
  -webkit-transform: scale(0.95), translateY(-50%);
  transform: scale(0.95), translateY(-50%);
}
```

For bonus points, we'd use something like [Modernizr](http://modernizr.com/) to detect touch screens and apply our hover styles selectively. This is because `hover` states tend to be sticky on touch browsers ([more info](http://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices)). Since we're not doing that, this last button will show the arrow once when tapped on a touchscreen.

Here's the final result:

<p data-height="400" data-theme-id="12949" data-slug-hash="rVNGxV" data-default-tab="result" data-user="mniebling" class='codepen'>See the Pen <a href='http://codepen.io/mniebling/pen/rVNGxV/'>Codrops Arrow Button (4)</a> by Mike Niebling (<a href='http://codepen.io/mniebling'>@mniebling</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Not too bad!


<style>
.post-btn {
  position: relative;
  padding: 0.8rem 3rem;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

.post-btn:hover {
  background: #01AD7B;
}

.post-btn-2:before {
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

.post-btn-3:before {
  opacity: 0;
}

.post-btn-3:hover:before {
  left: 75%;
  opacity: 1;
}

.post-btn-4:active {
  border-color: #009166;
  background-color: #009166;
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
}

.post-btn-4:active:before {
  -webkit-transform: scale(0.95), translateY(-50%);
  transform: scale(0.95), translateY(-50%);
}
</style>
