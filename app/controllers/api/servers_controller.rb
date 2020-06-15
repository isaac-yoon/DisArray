class Api::ServersController < ApplicationController

  def index
    @servers = Server.where(owner_id: current_user.id)
    @servers += current_user.servers
    render :index
  end
  
  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    # @server.photo.attach(params[:server][:photo]) if params[:server][:photo]

    if @server.save
      ServerMembership.create({
        member_id: current_user.id, 
        server_id: @server.id
      })
      
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])

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

  def join
    # find by invite code
    @server = Server.find_by(invite_code: params[:invite_code])

    if @server
      if current_user.servers.include?(@server)
        render json: ['Member already exists in server'], status: 422
      else
        ServerMembership.create({
          member_id: current_user.id, 
          server_id: @server.id
        })

        render :show
      end
    else
      render json: ['Server not found'], status: 404
    end
  end

  def leave
    @server = current_user.servers.find_by(id: params[:server_id])
    @server_membership = ServerMembership.find_by(member_id: current_user.id, server_id: params[:server_id])

    if @server && @server_membership
      @server_membership.destroy
      render json: @server.id
    else
      render json: ['Cannot find server or member does not exist in server'], status: 422
    end
  end

  private

  def server_params
    params.require(:server).permit(:name, :photo, :invite_code)
  end
end
