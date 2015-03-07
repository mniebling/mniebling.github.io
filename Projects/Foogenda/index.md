---
layout: post
title: Foogenda
date: 2015-03-06
---

[Foogenda](https://www.foogenda.com) is a tool to take the pain out of event planning. Its goal is to replace those long email chains where everyone tries to coordinate dates, destinations and details. My bachelor party, which required a 2-month, 70+ email thread to plan, was one of its inspirations.

While Foogenda fills a useful niche for us, the app is also a platform for us to research, learn and execute on things we may not get to do during our day jobs. I've learned a *ton* on this project and we're barely even to the MVP stage so far.


### What we're using

Foogenda is a web app that's designed from a mobile-first, adaptive design standpoint. I stick primarily to the client-side, doing all of the design and styles and some of the Javascript. My counterpart does the rest of the client code and all of the C# API.

Our client stack consists of [Ember.js](http://www.emberjs.com) with [LESS](http://lesscss.org) as the CSS preprocessor. We don't use Ember Data or Ember CLI, but we do use [Gulp](http://gulpjs.com) for builds, [Appveyor](http://www.appveyor.com) for CI/deployment and [Azure](http://azure.microsoft.com/en-us/services/websites/) for web hosting at the moment. Before Foogenda, I didn't know anything about any of these technologies, but now I'm almost punching my weight as a front-end dev.

Typically my professional work consists of handing off my designs to others for implementation, so it's been really fascinating to straddle the fence and try to get my own ideas to work. I've found it can be tough not to compromise on the design when something doesn't work right out of the box. But at the same time, my sense of what can be easy or difficult to implement is getting better and better, which helps lower the cycle time between mockups and reality.


### Mobile-first

We want Foogenda to be useful and usable across all types of device and screen size. This means starting with small touch screens and enhancing for larger screens and more precise inputs. I don't want to dwell on the technical approaches to this (just go check out [Brad Frost's resources](http://bradfrost.github.io/this-is-responsive/)!), but there are a few interesting ways this philosophy shows up in our designs.

One is a *card* metaphor similar to the components from Google's Material Design. Cards allow us to present large, touch-friendly controls that work well for touch interactions and still make sense with a mouse and keyboard. For example, here's our text field card -- the whole card is the input, so it gets all the native focus and accessibility benefits while still looking custom:

(insert codepen of input card demo)

Another common use for the cards is as a front-end for selection. Instead of presenting selection options in a `<select>`, we take a cue from [this excellent article]() by WHOS IT BY? and present what we call an "overlay panel" to make the choice. This buys us much more real estate, avoids the native selection widgets (which aren't always ideal), and gives us a chance to build custom UI around the selection that enhances usability.

(insert screenshot of invites overlay panel)
