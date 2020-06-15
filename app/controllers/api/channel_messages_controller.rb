class Api::ChannelMessagesController < ApplicationController
  def index
    @channel_messages = ChannelMessage.all
    # need to add some logic to conditionally render channel messages based on channel_id
    render :index
  end
end
