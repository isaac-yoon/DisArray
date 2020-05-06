class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    message = ChannelMessage.create(
      data['message']
    )
    # ChannelMessage might need more arguments
    # such as author_id and channel_id

    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
