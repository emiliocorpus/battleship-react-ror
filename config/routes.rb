Rails.application.routes.draw do
  get 'hangman/index'

  root 'page#index'  
  get '/battleship' => 'battleship#index'
  get '/hangman' => 'hangman#index'
end
