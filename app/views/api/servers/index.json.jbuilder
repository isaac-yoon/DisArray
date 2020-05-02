@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id
    # json.photoUrl url_for(server.photo)
  end
end