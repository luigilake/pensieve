class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: User.all
  end

  def show
    user = User.find(current_user.id)
    memories = user.memories.order('created_at DESC').map do |memory|
      {
        id: memory.id,
        body: memory.body,
        created_at: memory.created_at.strftime('%^B %d %Y'),
        event_id: memory.event_id
      }
    end
    render json: memories
  end

  def destroy
    user_id = params[:id]
    user_to_delete = User.find(user_id)
    user_to_delete.memories.map do |memory|
      memory.delete
    end
    user_to_delete.identities.map do |identity|
      identity.delete
    end
    user_to_delete.delete
    render json: User.all
  end

  def current
    render json: current_user
  end

end
