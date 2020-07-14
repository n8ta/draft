Rails.application.routes.draw do
  root to: 'sessions#index'
  post '/sessions', to: 'sessions#create'
  resources :drafts, only: [:index, :create, :show]
end
