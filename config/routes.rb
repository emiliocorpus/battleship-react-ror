Rails.application.routes.draw do
  resources :scores
  resources :page, only: [:index]
  root 'page#index'  
end
