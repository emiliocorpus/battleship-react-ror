Rails.application.routes.draw do
  resources :page, only: [:index]
  root 'page#index'  
end
