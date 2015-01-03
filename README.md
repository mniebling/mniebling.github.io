mniebling.github.io
-------------------

Mike's design & project [site](https://mniebling.github.io).


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
