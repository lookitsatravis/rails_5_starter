# Rails 5.2 Starter App

## Configuration

### Requirements

* Ruby 2.4+
* NodeJS 8.11+
* Yarn package manager

#### Note on DB

This is configured to use Postgres, but you can use whatever you want. Just update the `database.yml` as well as remove the first migration which is specific to PG.

### First Time Setup

* `git clone https://github.com/lookitsatravis/rails_5_starter.git`
* `mv rails_5_starter/ {{your_app_name}} && cd {{your_app_name}}`
* Update the gemset name in `.ruby-gemset` (this assumes you're using RVM)
* `cd .. && cd {{your_app_name}}` (creates the gemset if necessary)

Create your GitHub repo, then:

* `git remote set-url origin {{URL}}`
* `git push -u origin master`
* `git checkout -b develop`
* `git push -u origin develop`

*Note: You're free to remove the "First Time Setup" section of the readme once your app is setup.*

### Local Setup

* `gem install bundler`
* `bundle`
* `yarn`
* `cp .env.example .env`
* Customize your local `.env` as you see fit.
* `rails db:create`
* `rails db:migrate`

### Ongoing Setup

Anytime you pull down this repo you'll do this:

* `bundle`
* `yarn`
* `rails db:migrate`

## Running

2 processes are required:
  * `rails s`
  * `./bin/webpack-dev-server`

## Deployment

The application is tested and deployed automatically from the `develop` branch when it is updated in GitHub.

## Testing

You can test the Rails app by running `rspec`. You can test the included Vue apps by running `npm run test`.