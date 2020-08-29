---
title: The Guardian's Colorblind-Unfriendly Match Form Display
date: 2015-02-02
tags:
- design
---

> Note: Although I doubt they read my article, The Guardian did redesign their match form visualization. [Check it out](https://www.theguardian.com/football/premierleague/table) — it's pretty bang-on to my thought process here.

The Guardian's [football coverage](http://www.theguardian.com/football) is thorough and attractively presented, but there's one element of their design that is a surprising miss. In each Premier League article, they show a visualization that describes a side's performance over the last five matches. Cool info, but heaven help you if you check out this table and also have a form of red-green color blindness (like [protanopia or deuteranopia](http://www.color-blindness.com/deuteranopia-red-green-color-blindness/)).

Red-green is the most common color vision deficiency, affecting around 8% of males. It's common enough that I think designers should develop an eye for color accessibility issues just like we should notice badly-kerned fonts or misaligned edges. The trigger is simple --- if something in the design uses *only* color to communicate information, that's a problem. Check it out:

![](/images/guardianmatchform/1.png)

The match form is shown as five vertical lines, with red for losses, green for wins and gray for draws. But to a viewer with a red-green color deficiency, the differences are imperceptible.

The design solution is to communicate the information with *any* other visual attribute in addition to color. For example, we could change the dashes to letters that indicate the outcome:

![](/images/guardianmatchform/2.png)

Technically, the color-blindness problem is solved. But there are still two issues. First, the eye still has to do a lot of work to parse those letters -- because the capital letters are fairly uniform in shape, they appear as a single visual block. Second, the letters are different widths, so the matches don't line up vertically, which makes them slightly tougher to compare.

One great approach that solves both of these problems is the *sparkline*, a "small, intense, simple, word-sized graphic" invented by Edward Tufte. In [this thread](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR), you can see some examples of sparklines applied to win/loss data for an entire baseball season (162 games).

If we naively apply that sparkline style to our football data, we might get something like this:

![](/images/guardianmatchform/3.png)

Now the visual shape is much different between a win and a loss, but our display still isn't perfect. When there are multiple draws in a row (Man U), the viewer has to extrapolate the number by calculating the width of the bars that would take up the space.

![](/images/guardianmatchform/4.png)

If we put an explicit mark on the sparkline for a draw, now the patterns jump out at the viewer and the displays are quick to read and easy to compare. In fact, we might even find that we no longer *need* the color encoding at all:

![](/images/guardianmatchform/5.png)

I'll let you be the judge between those last two. However, keep in mind that just like in Tufte's baseball example, we could now use color to encode some other aspect of the data. Our color-vision-deficient viewers will be a lot better off with either of these options, though!
