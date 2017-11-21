Rails.application.routes.draw do
  devise_for :users
  resources :comments
  resources :posts
  root 'stadium#index'

  get 'home' => 'stadium#index'

  get 'information' => 'stadium#about'
  get 'stadium/about'

  get 'blog' => 'posts#index'
  post 'blog' => 'posts#index'

  get 'players' => 'stadium#players'
  get 'stadium/players'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
