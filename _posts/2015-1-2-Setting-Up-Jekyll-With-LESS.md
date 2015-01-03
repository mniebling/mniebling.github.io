---
layout: post
title: Setting up Jekyll on Github Pages with LESS
---

One cool thing about Jekyll is that it comes out of the box with [SASS support](http://jekyllrb.com/docs/assets/). However, if your preprocessor of choice is LESS, there's a bit more work involved to get that in place. My goals for this blog were:

1. Get LESS working instead of SASS.
2. Make sure it doesn't break Github Pages hosting.
3. Create one command for running the blog locally, that does both whatever `bundle exec jekyll serve` does plus compile & live reload the LESS on changes.

The complicating factor is that I am a lowly designer and know very little about this sort of stuff. Here are some of the options I looked at and the narrative of how I got it into place with no previous Ruby dev/build experience.

Before any of this stuff, the very first thing I did was to change my CSS to vanilla LESS and and link the site against a compiled CSS file that doesn't exist yet. Of course, this broke all styling, but once the compilation is running, at least I'd be able to tell it worked!

### Plugins

The easiest option to get LESS working on Jekyll is probably to use its [plugin system](http://jekyllrb.com/docs/plugins/), which augments how Jekyll generates the site. Unfortunately, hosting on Github Pages only allows [whitelisted plugins](https://help.github.com/articles/using-jekyll-plugins-with-github-pages/) and at the time of this post there isn't one for LESS.

### Commit hooks

Some pretty smart folks [have solved this](https://www.benburwell.com/posts/less-file-compilation-for-jekyll-github-pages/) by adding a Git commit hook that compiles the LESS to CSS whenever a commit happens. However, I'm lazy, so I'd like to have  compilation and reload happen locally on any change, not just when I commit.

Luckily, it turns out other lazy programmers have come before me and built some cool technology called _task runners_, which can watch local files for changes and then do stuff like concatenate, minify, hint or compile.

### Let's use Gulp?

I have a tiny bit of experience using Gulp on one of my side projects, so that's where I looked first. Buuuut it's in the Node/npm universe, and it felt like it would be better to stay on the Ruby side of things instead of introducing a bunch of javascript dependencies into this project. So I pinged a [Ruby buddy](https://twitter.com/patrick_turley) and he pointed me towards Rake instead.

### Let's use Rake

Having decided on Rake, step 1 was to get it added to the project. The [Rake docs](http://docs.seattlerb.org/rake/) have helpful instructions (`gem install rake`) but I wanted to make sure that was automated when Future Me wants to set up the repo on a new machine or something. So it should probably go in the Gemfile instead.

I headed over to http://rubygems.org/ and found the gem, then added it to the Gemfile: `gem 'rake', '~> 10.4.2'`. I took a few minutes to figure out what the [pessimistic operator](http://robots.thoughtbot.com/rubys-pessimistic-operator) is because I've never seen `~>` before. Then I committed the gemfile change, `cd` to my project directory and did `bundle install` to get the Rake gem. To confirm it worked: `bundle show rake`. Yup, there it is!

### Need a LESS compiler too

So we now have something that can run tasks, but now we need something to handle the actual compilation step. I head back to rubygems and find the [LESS gem](http://rubygems.org/gems/less), then add it to the Gemfile as well (`gem 'less', '~> 2.6.0'`).

Also, as I discovered when I tried to run my first Rake task, there's one more dependency once LESS is in play. Because LESS uses Javascript, we need something that will allow JS and Ruby to talk to each other. This something is [TheRubyRacer](https://rubygems.org/gems/therubyracer), and I had to go add that gem as well.

Once that is all done, the next step was to set up the task that will compile it. The first Google result I found was [this](https://gist.github.com/pfig/1969062) helpful Gist from Pedro Figueiredo. Since I didn't speak Ruby too well, I struggled through changing the path names and trying to figure out what I was doing. Here's my heavily commented and slightly tweaked version of that original Rakefile: ([gist](https://gist.github.com/mniebling/62e7b2672212595415fb)).

Awesome! Now, I could do `rake compile_less` from the command line and it would correctly build and copy the LESS over to the target CSS file. But, I wanted this to happen automatically! So... onwards.

### Automating the LESS compilation task
The gem I decided to use for this was [Guard](https://rubygems.org/gems/guard), which went into the Gemfile like so: `gem 'guard', '~> 2.10.5'`. However, when I started reading the Guard docs, my initial reaction was total confusion. It seemed like Guard would let me handle the compilation itself, but all I wanted to do was run my fancy new Rake task when a .less file changed.

So I did a bit more Googling and found something that seemed relevant: [guard-rake](https://github.com/rubyist/guard-rake). Awesome! I had Guard installed, so I went ahead and Gemfiled guard-rake (`gem 'guard-rake', '~> 1.0.0'`), then did `guard init rake`, which created a Guardfile in my repo root for me.

To get the Guardfile watching the correct stuff was a bit of a pain, because it uses regular expressions to set paths. I ended up with this (note I also changed the name of the Rake task to my `compile_less`:

```ruby
guard "rake", :task => "compile_less" do
	watch(%r{^web/less/.+\.less})
end
```

I tested this by running `bundle exec guard init`, changing a LESS file, and watching the compilation task fire. Awesome! Now all that was left was to get rid of the Guard terminal and stitch Guard and Jekyll together so everything would run with one command.

### Making everything run with one command
This actually seemed like a lost cause until I found the [guard-jekyll-plus](https://github.com/imathis/guard-jekyll-plus) gem. Installing this guy allowed me to set up a second Guard task like so:

```ruby
guard "jekyll-plus", :serve => true do
  watch /.*/
  ignore /^_site/
end
```

This task, with `:serve => true` included, causes Guard to spin up the Jekyll server when it starts. So when I run `bundle exec guard`, it now starts the Jekyll server, watches for LESS changes with the `rake` guard and watches for any other changes with the `jekyll-plus` guard. Finally, I can still commit the base main master branch and let github pages build the site without any special configuration. Perfect!!

If you want to see the finished implementation, check out the project repo [here](https://github.com/mniebling/mniebling.github.io).




