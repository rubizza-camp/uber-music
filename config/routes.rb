Rails.application.routes.draw do
  root 'welcome#page'
  post '/organizations/check_time', to: 'organizations#check_time'
  devise_for :users
  ActiveAdmin.routes(self)
  resources :genres
  resources :events
  resources :places
  resources :users
  resources :moderators
  resources :organizations do
    member do
      get :confirm
      patch :leave
    end
  end
  resources :musician_skills
  post '/events/update', to: 'events#update'
  post '/events/select_place', to: 'events#select_place'
end
