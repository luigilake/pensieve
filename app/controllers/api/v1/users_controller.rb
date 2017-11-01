class Api::V1::UsersController < ApplicationController

  def index
    render json: current_user
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

end
