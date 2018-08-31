Rails.application.routes.draw do
  default_url_options host: Rails.application.config.domain, protocol: 'https'

  match "/*path" => "home#index", via: [:get]
  root to: 'home#index'
end
