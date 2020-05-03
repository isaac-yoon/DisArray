class Api::ChannelsController < ApplicationController
  def index
    @server = Server.find_by(id: params[:id])
    if @server.nil?
      render json: ['Server could not be found'], status: 422
    else
      @channels = @server.channels
    end
    render :index
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find_by(id: params[:id])

    if @channel.server.owner_id == current_user.id && @channel.update(channel_params)
      render :show
    else
      render json: ['Error, could not be updated'], status: 422
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])

    if @channel.nil?
      render json: ['Error - channel not found'], status: 422
    else
      if current_user.id == @channel.server.owner_id
        @channel.destroy
        render :show
      else
        render json: ['Error - channel not destroyed'], status: 422
      end
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end
