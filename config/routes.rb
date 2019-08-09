Rails.application.routes.draw do
  namespace :api do
    resources :genres
    resources :events
  end
end
