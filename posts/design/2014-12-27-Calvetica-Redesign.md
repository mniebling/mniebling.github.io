---
title: Calvetica Redesign
date: 2014-12-27
tags:
- design
---

> Note: This is an older piece that I did for a previous site. Calvetica has since redesigned its app quite a bit!

![](/images/calvetica/1.png)

Here's the Calvetica home screen that I started with. The main thing I wanted to adjust was how much real estate/visual weight was given to the current year and the month picker (which is tappable — it changes the month displayed in the calendar below). I also wanted to add today's date and make a few other minor tweaks.

![](/images/calvetica/2.png)

Since I figure the frequency at which you need to look at a given month is inversely proportional to how close it is to today, I collapsed the month picker down to one line. The left and right edges are faded out slightly as an affordance that the list is horizontally scrollable.

![](/images/calvetica/3.png)

Next, since I wanted to add in today's date and the month picker change opened up some space, I decided to go with a more overtly header-y treatment at the top of the screen. Like the existing Calvetica detail pages, this section displays the full day and date, but I also swapped the Today shortcut with the settings icon so that all the "right now" stuff would be in the header. I also spelled out "Settings" on the bottom to be consistent with "Notifications."

![](/images/calvetica/4.png)

Finally, I added a badge to the "today" link in the header so that the user doesn't have to look to the detailed calendar for the relative "busy-ness" of the current day.

I played around with adding separate badges to the "Today" link for each calendar (for example, in this comp they would read 4 for the purple calendar and 1 for the grayish one), but ended up tossing that idea — it might work well for my own relatively light usage, but as the number of badges increased the design started to get really cramped. Plus, if we ever needed to localize the strings in the header there, we'd need the badge to occupy a small fixed space.
