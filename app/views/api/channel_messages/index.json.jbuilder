@channel_messages.each do |channel_message|
  json.set! channel_message.id do
    json.partial! 'api/channel_messages/channel_message', channel_message: channel_message
  end
end