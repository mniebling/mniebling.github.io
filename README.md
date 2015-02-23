mniebling.github.io
-------------------

Mike's design & project [site](http://www.mikeniebling.com).


### Setup on Mac

##### 1. Ruby
Do `ruby -v` and make sure it's `1.9.3` or `2.0.0` or higher. If not, you need to install Ruby.


##### 2. Bundler
Bundler lets you use "gemfiles" to manage dependencies. Install this package manager with `gem install bundler`. Ruby 1.9 and later ships with RubyGems, so you don't need anything beyond Ruby to get `gem` commands to work.


##### 3. Installing Jekyll and other gems
The project's Gemfile includes the github-pages gem, which includes Jekyll and some other useful dependencies. It also has gems for rake and guard to enable local live-reload on LESS and other file changes.

To set things up locally, run `bundler install` in the repo root. This will go download and install all the proper gems.


##### 4. Running Locally
Run `bundle exec guard` in the repo root. This will build the site once with Jekyll, then run a local server and rebuild on changes. The site should be available locally at <http://localhost:4000>.



### Setup on Windows

Most things work, except for the LESS compilation, due to a crazy mess of TheRubyRacer craziness that I wasn't able to sort out. But the Jekyll watch/serve will still be relatively okay.


#### 1. Ruby
To install Ruby, swing over to <http://rubyinstaller.org/downloads>. Probably a good idea to say yes when asked about adding the executables to the PATH. I got `1.9.3`.


#### 2. Ruby Dev Kit
While on the RubyInstaller site, grab the DevKit install for the correct version of Ruby. Extract it to a subfolder of the Ruby directory. Then `cd` to the DevKit directory and probably just do `ruby dk.rb init` followed by `ruby dk.rb install`.


#### 3. Bundler
First, update RubyGems to avoid errors like [these](http://stackoverflow.com/questions/10246023/bundle-install-fails-with-ssl-certificate-verification-error/10430331#10430331). Ideally, you would just do (`gem update --system`), but there's another error with updating too far forward, so do `gem update --system 2.3.0` instead until [this issue](https://github.com/rubygems/rubygems/issues/977) is fixed. Computer Science!!

Then, do `gem install bundler`.


#### 4. Python
Install python 2.7 also (Yes, 2.7 -- [blame Pygments.rb](https://github.com/tmm1/pygments.rb/pull/138)) and make sure to check the add to path option. It's easy to miss, tucked away in the list of options that looks like a file structure.


#### 5. Finish up
`bundler install` in the project root to get dependencies. Then `bundle exec guard -g windows` to run (only the Jekyll command, not the LESS step).
