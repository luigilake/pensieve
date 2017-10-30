class Api::V1::UsersController < ApplicationController

  def index
    render json: current_user
  end

  def show
    user = User.find(current_user.id)
    render json: user.memories
  end

end
