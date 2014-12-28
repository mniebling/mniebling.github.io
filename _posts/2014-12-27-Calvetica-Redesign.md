---
layout: post
title: Calvetica Redesign
---

> A note: This is an older piece that I did for a now defunct blog. I wanted to port it over as a test case for the new site layout & approach. Calvetica has since redesigned its app quite a bit, and I still dig it; if you're in the market for an iOS calendar app, go check them out.

Here's the Calvetica home screen that I started with.

![alt text](/images/calvetica/before.png)


The main thing I wanted to adjust was how much real estate/visual weight was given to the current year and the month picker (which is tappable — it changes the month displayed in the calendar below). Since I figure the frequency at which you need to look at a given month is inversely proportional to how close it is to today, I collapsed the month picker down to one line. The borders are faded out slightly as an affordance that the list is horizontally scrollable.

Next, since I wanted to add in some extra "today" info (mostly because I'm kind of oblivious and usually don't know the current date) and the month picker change opened up some space, I decided to go with a more overtly header-y treatment at the top of the screen. Like the existing Calvetica detail pages, this section displays the full day and date, but I also swapped the Today shortcut with the settings icon so that all the "right now" stuff would be in the header.

I also added a badge to the "today" link in the header so that the user doesn't have to look to the detailed calendar for the relative "busy-ness" of the current day. I played around with adding separate badges to the "Today" link for each calendar (for example, in this comp they would read 4 for the purple calendar and 1 for the grayish one), but ended up tossing that idea — it might work well for my own relatively light usage, but as the number of badges increased the design started to get really cramped. Plus, throw in localization on top of that and things get really hairy.

Here's what it looks like after the changes.

![Calvetica: After](/images/calvetica/after.png)
