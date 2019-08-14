Rails.application.routes.draw do
  devise_for :users
  resources :genres
  resources :events
  resources :places
  resources :users
  resources :organizations
  resources :musician_skills
end
