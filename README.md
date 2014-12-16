mniebling.github.io
-------------------

Mike's design & project [site](https://mniebling.github.io).


### Setup on Mac

##### 1. Ruby
Do `ruby -v` and make sure it's `1.9.3` or `2.0.0` or higher. If not, you need to install Ruby.


##### 2. Bundler
Bundler lets you use "gemfiles" to manage dependencies. Install this package manager with `gem install bundler`. Ruby 1.9 and later ships with RubyGems, so you don't need anything beyond Ruby to get `gem` commands to work.


##### 3. Installing Jekyll
First, create a file called `Gemfile` (no extension) and add a source and the github-pages gem:

````
source 'https://rubygems.org'
gem 'github-pages'
````

Then run `bundle install`, which will install everything in your Gemfile. Which is just the github-pages gem. Which includes Jekyll.


##### 4. Running Jekyll Locally
Use `bundle exec jekyll serve` in your repo's root. The site should be available at <http://localhost:4000>.
