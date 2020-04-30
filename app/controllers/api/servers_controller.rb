class Api::ServersController < ApplicationController

  def index
    @servers = Server.all
    render :index
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id

    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(owner_id: params[:id])

    if @server.nil?
      render json: ['Error - server not found'], status: 422
    else
      if current_user.id == @server.owner_id
        @server.destroy
        render :show
      else
        render json: ['Error - server not destroyed'], status: 422
      end
    end
  end

  def update
    @server = Server.find_by(id: params[:id])

    if @server.owner_id == current_user.id && @server.update(server_params)
      render :show
    else
      render json: ['Error, could not be updated'], status: 422
    end
  end

  def show
    @server = Server.find_by(id: params[:id])
    render :show
  end
  
  private
  def server_params
    params.require(:server).permit(:name)
  end
end
