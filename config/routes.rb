Rails.application.routes.draw do
  root 'page#index'  
  get '/battleship' => 'page#battleship'
  get '/hangman' => 'page#hangman'
end
