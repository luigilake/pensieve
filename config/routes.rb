Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  namespace :api do
    namespace :v1 do
      get "current_user" => "users#current"

      resources :timelines, only: [:index, :show, :create, :destroy] do
        resources :events, only: [:index, :create]
      end

      resources :events, only: [:show] do
        resources :memories
      end

      resources :users, only: [:index, :show, :destroy]
      resources :events, only: [:index, :show, :destroy]
      resources :memories, only: [:index, :update, :destroy]

    end
  end

  root 'static_pages#index'
  get "*path", to: "static_pages#index"
end
