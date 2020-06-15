class Channel < ApplicationRecord
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
  
  # after_create :create_channel_chat

  # def create_channel_chat(channel)
  #   App.cable.subscriptions.create(
  #     {
  #       channel: "#{channel.name}",
  #       room: "#{channel.id}"
  #     }
  #   )
  # end
end