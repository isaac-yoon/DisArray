json.extract! server, :id, :name, :owner_id, :invite_code, :member_ids

# extract attributes / column names on a table

json.photoUrl url_for(server.photo) if server.photo.attached?