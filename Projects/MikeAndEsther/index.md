---
layout: post
title: Mike and Esther's Wedding Site
date: 2015-03-29
---

Esther and I had a pretty non-traditional wedding, of which a big part was going DIY on a lot of the "typical" wedding stuff. Our invites & [website](http://www.mikeandesther.com) were a big part of that; Esther designed the mailers and had them printed, and I put together a single-page site to give our guests info on the location and other particulars.

It was a fun project with a few interesting learning opportunities. For one thing, it was my first time learning about [custom Google maps](https://support.google.com/maps/answer/3045850?hl=en). And we also had the idea to do a little storytelling for our guests so they could see some of the important places and times in our relationship. For this, I took a look at a library for embedding custom timeline controls.


### Timeline.js

[Timeline.js](http://timeline.knightlab.com/) is a project from the Knight Lab at Northwestern University. It allows anyone to set up data in a Google doc and then builds the interactive timeline control to render it. If you create a timeline via their website, it provides a simple embed link that can be used to place the timeline somewhere else.

However, I wanted to self-host the timeline because that way I'd be confident our site would work in perpetuity, even if the timeline.js hosting situation changed. Also, I'd have more control over the appearance of the timeline, so it could blend in better with our site's styles.
