---
layout: post
title: The Guardian's Colorblind-Unfriendly Match Form Display
---

The Guardian's [football coverage](http://www.theguardian.com/football) is both thorough and attractively presented, but there's one element of their design that is a surprising miss. In each Premier League article, they show a visualization that describes a side's performance over the last five matches. Cool info, but heaven help you if you check out this table and also have one of the forms of [red-green color blindness](http://www.color-blindness.com/deuteranopia-red-green-color-blindness/).

Red-green is the most common color vision deficiency, and it's something that designers should develop an eye for, just the same as badly-kerned fonts or misaligned edges. The trigger is simple --- if something in the design uses *only* color to communicate information, that's a problem. Check it out:

![Match Form: 1]({{site.img}}/guardianmatchform/1.png)
The match form is shown as five vertical lines, with red for losses, green for wins and gray for draws. But to a user with red-green colorblindness (protanopia is one type), the differences are imperceptible.

The design solution is to communicate the information with *any* other visual attribute in addition to color. For example, we could change the dashes to letters that indicate the outcome:

![Match Form: 2]({{site.img}}/guardianmatchform/2.png)
Technically, the color-blindness problem is solved. But there are still two problems. First, the eye still has to do a lot of work to parse those letters -- because the capital letters are fairly uniform in shape, they appear as a single visual block. Second, the letters are different widths, so the matches don't line up vertically, which makes them slightly tougher to compare.

One great approach that solves both of these problems is the *sparkline*, a "small, intense, simple, word-sized graphic" invented by Edward Tufte. In [this thread](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR), you can see some examples of sparklines applied to win/loss data for an entire baseball season (162 games).

If we naively apply that sparkline style to our football data, we might get something like this:

![Match Form: 3]({{site.img}}/guardianmatchform/3.png)
Now the visual shape is much different between a win and a loss, but our display still isn't perfect. When there are multiple draws in a row (Man U), the viewer has to extrapolate the number by calculating the width of the bars that would take up the space.

![Match Form: 4]({{site.img}}/guardianmatchform/4.png)
If we put an explicit mark on the sparkline for a draw, now the patterns jump out at the viewer and the displays are quick to read and easy to compare. In fact, we might even find that we no longer *need* the color encoding that caused us a problem in the first place:

![Match Form: 5]({{site.img}}/guardianmatchform/5.png)
I'll let you be the judge between those last two. However, keep in mind that just like in Tufte's baseball example, we could now use color to encode some other aspect of the data. Our color-vision-deficient viewers will be a lot better off with either of these options, though!
