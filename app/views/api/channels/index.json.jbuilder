@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :server_id
    # json.photoUrl url_for(channel.photo) if channel.photo.attached?
  end
end