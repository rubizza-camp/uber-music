Rails.application.routes.draw do
  root 'welcome#page'
  devise_for :users
  ActiveAdmin.routes(self)
  resources :genres
  resources :events
  resources :places
  resources :users
  resources :moderators
  resources :organizations
  resources :musician_skills
end
