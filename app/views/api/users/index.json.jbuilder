@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    # if user.photo.attached?
    #   json.photoURL url_for(user.photo)
    # end

    # possible future addition for adding profile photos for users
  end
end