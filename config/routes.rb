Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :channel_messages, only: [:index]
    resources :servers, only: [:index, :create, :destroy, :update, :show]
    resources :channels, only: [:index, :create, :destroy, :update]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end