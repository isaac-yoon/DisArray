@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id, :member_ids, :invite_code
    # :member is from server.rb, through association
    # ONLY WORKS for through associations
    # drop the s, add the 'ids' and it will grab all the member ids for you
    # possible refactoring - adding it to show page
    json.photoUrl url_for(server.photo) if server.photo.attached?
  end
end