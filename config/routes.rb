Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  namespace :api do
    namespace :v1 do
      resources :timelines do
        resources :events do
          resources :memories
        end
      end

      resources :users, only: [:index]
      resources :events, only: [:index, :show]
    end
  end

  root 'static_pages#index'
  get "*path", to: "static_pages#index"
end
