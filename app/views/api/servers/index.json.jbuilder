@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id, :member_ids, :invite_code
    # :member is from through association in server.rb
    # ONLY WORKS for through associations
    # drop the s, add the 'ids' and it will grab all the member ids for you
    # POSSIBLE REFACTORING:
    # move the member_ids to the show.json.jbuilder
    json.photoUrl url_for(server.photo) if server.photo.attached?
  end
end