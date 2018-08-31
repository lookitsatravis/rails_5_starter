ruby '2.4.2'

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'aws-sdk', '~> 3'
gem 'bootsnap', require: false
gem 'dotenv-rails'
gem 'pg', '>= 0.18', '< 2.0'
gem 'premailer-rails'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.2'
gem 'sentry-raven'
gem 'skylight'
gem 'uglifier', '>= 1.3.0'
gem 'validate_url'
gem 'validates_timeliness', '~> 4.0'
gem 'webpacker'

group :development, :test do
  gem 'brakeman'
  gem 'capybara'
  gem 'database_cleaner'
  gem 'email_spec'
  gem 'factory_bot_rails'
  gem 'faker', branch: 'master', git: 'https://github.com/stympy/faker.git'
  gem 'fuubar'
  gem 'rspec-rails', '~> 3.0'
  gem 'simplecov'
  gem 'shoulda-matchers', '~> 3.0.0'
end

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'
  gem 'byebug'
  gem 'did_you_mean', '> 1.1', '< 1.2'
  gem 'guard-rspec'
  gem 'letter_opener'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'lol_dba'
  gem 'net-ssh'
  gem 'powder'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'spring-commands-rspec'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'spring'
  gem 'squasher'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'webmock'
end
