class Api::ServersController < ApplicationController

  def index
    @servers = Server.all
    
  end

  def create
  end

  def destroy
  end

  def update
  end

  def show
  end
  
end
