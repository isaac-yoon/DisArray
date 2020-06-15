Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :channel_messages, only: [:index]
    resources :servers, only: [:index, :create, :destroy, :update, :show]
    resources :channels, only: [:index, :create, :destroy, :update]


    # creating a manual route that will listen to the frontend
    # request type - url (from frontend) - redirect to controller#method
    post "servers/join", to: 'servers#join'
    delete "servers", to: 'servers#leave'

    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end