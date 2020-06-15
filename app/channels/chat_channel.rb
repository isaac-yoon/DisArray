class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stream_for 'chat_channel'
    stream_for "chat_channel_#{params[:channelId]}"

    # this is only one channel so far
    # @channel = Channel.find_by(id: params[:channel_id])
    # how to pass in channel_id?

    # stream_for @channel
    # analogous to the create method in a controller
    # sets up a websocket for ChatChannel
  end

  def speak(data)
    # analogous to POST and GET at the same time because it is sending and getting messages
    # message = ChannelMessage.create(
    #   data['message']
    # )
    # ChannelMessage might need more arguments
    # such as author_id and channel_id
    # @channel = Channel.find_by(id: params[:channel_id])
    # socket = { message: message.body }
    # ChatChannel.broadcast_to('chat_channel', socket)
    # ChatChannel.broadcast_to(@channel, socket)
    message = ChannelMessage.new(data['message'])
    if message.save
      socket = { message: message.body, type: 'message' }
      ChatChannel.broadcast_to("chat_channel_#{data['channelId']}", socket)
    end
  end

  def load
    messages = ChannelMessage.all.collect(&:body)
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    # sort of like dependent destroy, kind of

    # stop_all_streams
    # stop_stream_from "chat_room_#{params[:channelId]}"
  end
end
