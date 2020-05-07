json.channelMessages do |channelMessage|
  json.partial! 'channel_messages/channel_message', channelMessage: channelMessage
end