json.array!(@scores) do |score|
  json.extract! score, :id, :username, :score
  json.url score_url(score, format: :json)
end
