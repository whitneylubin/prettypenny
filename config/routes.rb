Rails.application.routes.draw do

  devise_for :users
  root 'home#index'
  resources :home, only: [:index]
  resources :user, only: [:index]
  get 'new_offers', to: 'new_offers#index'
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
