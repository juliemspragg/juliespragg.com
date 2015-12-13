#!/bin/bash

cd Sites/juliespragg.com

gem install bundle
gem update bundler

bundle update
bundle install
bundle exec jekyll serve --watch --baseurl=
