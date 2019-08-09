Rails.application.routes.draw do
  namespace :api do
    resources :genres
    resources :events
    resources :places
    resources :users
    resources :organizations
  end
end
