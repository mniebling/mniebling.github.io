source 'https://rubygems.org'

# The github-pages gem includes a bunch of stuff needed to host there
gem 'github-pages'

# Rake task runner
# (from 10.4.2 to 10.5)
# http://robots.thoughtbot.com/rubys-pessimistic-operator
gem 'rake', '~> 10.4.2'

# LESS compiler for Ruby
gem 'less', '~> 2.6.0'

# Bridges Javascript and Ruby
# Don't install on Windows, though; it's broken there :(
gem 'therubyracer', '~> 0.12.1', :platform => :ruby


# Instead of basic Jekyll local watching,
# we'll use Guard so that we can live compile LESS as well:

# Watch for filesystem changes
gem 'guard', '~> 2.10.5'

# Run Rake tasks when a file changes
gem 'guard-rake', '~> 1.0.0'

# Rebuild Jekyll when a file changes
gem 'guard-jekyll-plus', '~> 2.0.0'
