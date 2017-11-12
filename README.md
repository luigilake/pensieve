# README  


## The Pensieve Project

Based on the 'Pensive' from the Harry Potter Series, this is a collection and collector of memories tied to historical events and timelines. This website aims to combat historical revisionism, not by displaying 'facts' about certain events, but rather by providing visitors with a tapestry of rich and intimate first-person moments. Users can submit their memories, describing how they or their loved ones experienced certain events, from 9/11 to WW2, and build a sense of community with others who experienced the same events.

[ ![Codeship](https://app.codeship.com/projects/b400a6c0-9f33-0135-4931-46fd1a276e75/status?branch=master)](https://app.codeship.com/projects/253582)
[![Coveralls](https://coveralls.io/repos/github/luigilake/pensieve/badge.svg?branch=master)](https://coveralls.io/github/luigilake/pensieve?branch=master)
---

## Features

 * Users can create and update their own personal account.
 * Users can sign in/out of their account
 * Users can optionally add a profile picture to their account.
 * Users can view a list of timelines on the root page
 * Users can create a timeline.
 * Users can view a chronological list of events in each timeline.
 * Users can add events to a timeline.
 * Users can optionally add an image to each event.
 * Users can add memories on individual events
 * Users can edit reviews they have created.
 * Users can view their personal timelines with their memories in their profiles.
 * Admins can delete any review, timeline, or event.

## Technologies

 * Backend: Rails 5.1.2
 * Frontend: React.js and Embedded Ruby
 * External API: Wikipedia
 * User Auth: Github and Google Omniauth
 * Drag and drop: react-dropzone
 * Image Hosting: Amazon Web Services
 * Styling: Foundation
 * Database: Postgres
 * Testing: RSpec, Capybara, Jasmine, Karma, Enzyme

## To run this app on your local machine

 * Install Ruby.2.3.3
 * In a terminal, run `git clone https://github.com/luigilake/pensieve.git`
 * Navigate to the project's root directory with `cd pensieve`
 * Run `bundle install && npm install && rake db:setup`
 * In terminal, run `rails s`
 * In another terminal window, run `./bin/webpacker-dev-server`
 * Visit `http://localhost:3000/` in your browser.
