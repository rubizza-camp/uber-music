Rails.application.routes.draw do
  resources :genres
  resources :events
  resources :places
  resources :users
  resources :organizations
  resources :musician_skills
end
