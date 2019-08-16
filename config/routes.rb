Rails.application.routes.draw do
  devise_for :users
  ActiveAdmin.routes(self)
  resources :genres
  resources :events
  resources :places
  resources :users
  resources :organizations
  resources :musician_skills
end
