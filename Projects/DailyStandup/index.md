---
layout: post
title: Daily Standup
date: 2015-03-06
---

DailyStandup is a Windows 8 tablet application that I designed at Sonoma Partners for [Permuta Technologies](http://www.permuta.com/). Permuta's main product is called DefenseReady, a platform for operations management that is used by many organizations in the U.S. military, law enforcement and civilian government communities.

The app is available in the [Windows 8 App Store](http://apps.microsoft.com/windows/en-us/app/defenseready-daily-standup/c2e5d633-7592-4c27-b8a5-012188056c1d) for download, along with a set of anonymized demo data for exploration.


### What it's for

At its core, DailyStandup is a data visualization app that revolves around a concept called PERSTEMPO. [PERSTEMPO](http://www.defense.gov/news/newsarticle.aspx?id=42131) (which stands for Personnel Tempo... heh) is a score that tracks how many nights a soldier has spent away from home. Once the score passes a certain threshold, that soldier is not supposed to be deployed until it levels off.

However, commanders didn't have very good visibility to this data. As a result, soldiers were getting put back into the field even with high PERSTEMPO scores, causing an increase in burnout, family problems and even suicides.

The goal of DailyStandup, then, is to give mission planners a tool to better visualize and understand the PERSTEMPO of the units under their control. It helps them find people with critical specialties while avoiding those who are being overused.

So the app has a great cause and an interesting problem space (I really enjoy data vis work). Here are some of the more interesting aspects of its design.


### Direct manipulation / filtering UI

> High-density designs also allow viewers to select, to narrate, to recast and personalize data for their own uses.
>
> -Edward Tufte, Envisioning Information

This app is designed to encourage exploration and comparison through a large hierarchy of people and units. I tried to support this by providing consistent, high-detail displays and a direct manipulation model where the actual data is the navigation interface.

For example, in the default view, units are displayed as large, touchable columns. The columns provide a high-level visual of the PERSTEMPO scores, data about the scale to allow comparisons, and a way to tap through and see that unit's constituents.

![DailyStandup: Unit groupings]({{site.img}}/projects/dailystandup/units.png)

The filtering options are always present on the left (the content scrolls horizontally on the right -- this is a typical Win 8 interaction pattern) and also change the view of the data. For example, changing the filter from Unit to Skill Class changes the groupings and columns like so (Air Force 14N, for example, is an [intelligence](http://usmilitary.about.com/od/officerjobs/a/14nx.htm) specialty):

![DailyStandup: Skill groupings]({{site.img}}/projects/dailystandup/skills.png)

At the bottom level of the hierarchy, a unit is made up of individuals. Once the user arrives at this level, the columns are replaced with individual photos and color-banded bars representing their tempo scores.

![DailyStandup: Drilldown]({{site.img}}/projects/dailystandup/drilldown.png)

The color scale used throughout the app is a sequential scheme chosen from the [ColorBrewer](http://bl.ocks.org/mbostock/5577023) collection to exhibit maximum perceptual difference and also to be usable for viewers with color vision deficiencies. You can see below that the "worse" scores are more visually intense, which is good because those are the scores we want to draw attention to!

![DailyStandup: Color scales]({{site.img}}/projects/dailystandup/colors.png)


### The PERSTEMPO chart

For more info on a specific person, the user can tap into one of the photos and see even more detail. Here, the soldier's PERSTEMPO is displayed in a rolling line chart, where the shaded area under the curve represents their score at that point in time (future assignments are included in the projection) and the orange bar represents the undesirable threshold.

![DailyStandup: Perstempo chart]({{site.img}}/projects/dailystandup/chart.png)

The shading isn't strictly necessary, but it draws the eye and helps establish the blue data as the 'main' measure.

Also, because PERSTEMPO is tracked in a rolling two-year timeframe, the chart is centered on the current date. I represented this as a visually darker vertical gridline on top of the lighter month gridlines and called it out further with the additional bold label below the *x*-axis.

The current calendar year's tick labels are also in a darker color so that it's easy to pick out and frame those months against the prior and upcoming years.


### Bullet charts

Although the color ranges help to visualize the PERSTEMPO scores among units, there's another view in the app that shows staffing data against alloted maximums. This is a textbook use case for Stephen Few's [bullet charts](http://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf) [PDF], where the value is encoded by a visually stronger bar on top of a lighter background bar encoding the range.

![DailyStandup: Bullet charts]({{site.img}}/projects/dailystandup/bullets.png)

Each bullet chart is scaled to percentages so that the user can make relevant comparisons between units whose allotments may be several orders of magnitude apart. The grid ticks are placed at 25% intervals and the darker gray range bar represents 100% of the allotment (some may go over, so the lighter bar displays up to 125% capacity).

This view, unlike most of the app, is laid out vertically; the 100% mark becomes a visual reference point as the user scrolls through the data, so they can make comparisons with minimal eye movement across the canvas.


### Carefully choosing scales for map data

Another interesting visualization is the map view, where soldiers are plotted geographically; the number of people at a given location is encoded as the diameter of a circle centered on their location. The goal is to get a visual sense of *where* the commander's resources are located.

However, these types of geographic displays are very often misleading. For one thing, a map chart can end up encoding [population density](http://junkcharts.typepad.com/junk_charts/2010/08/different-pictures-of-unemployment-.html) instead of whatever it's supposed to encode, because more dense areas often have more of *everything* in them.

And in our case, using circles to encode the values can also be problematic because [people are bad at visualizing differences in area](http://www.perceptualedge.com/articles/08-21-07.pdf) [PDF]. To minimize these issues, I used a power scale for the circles, so their area was scaled roughly to the order of magnitude of the data point. This way, a point representing 1,000 soldiers is larger than a point representing 1 soldier, but only 4 times larger instead of 1,000 times.

![DailyStandup: Map view]({{site.img}}/projects/dailystandup/map.png)

Another aspect of the data that lends itself to this approach is that there aren't a ton of individual points (they tend to be clustered around military bases). If the number of locations increased, you could imagine the circles would become very noisy and we'd have to figure out a different way to visualize the data.
