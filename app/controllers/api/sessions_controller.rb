class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render json: ['error'], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: { message: 'Error - not logged in' }, status: 404
    end
  end


end
