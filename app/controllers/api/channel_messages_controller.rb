class Api::ChannelMessagesController < ApplicationController
  def index
    @channel_messages = ChannelMessage.all
    render :index
  end

  
end
