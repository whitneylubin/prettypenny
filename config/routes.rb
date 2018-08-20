Rails.application.routes.draw do
  root 'home#index'

  devise_for :users
  resources :home, only: [:index]
  resources :user, only: [:index]
  get 'new_offers', to: 'new_offers#index'
  get 'hello_world', to: 'hello_world#index'
  get 'post_log_in_offers/index', to: 'post_log_in_offers#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
