class Api::V1::MemoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @event = Event.find(params[:event_id])
    @memories = @event.memories
    @memories_payload = @memories.map do |memory|
      user = User.find(memory.user_id)
      {
        id: memory.id,
        body: memory.body,
        user: {
          id: user.id,
          name: user.initialize_name,
          image_url: user.image_url
        }
      }
    end
    render json: @memories_payload
  end

  def create
    event = Event.find(memory_params['event_id'])
    memory = Memory.new
    memory.body = memory_params['body']
    memory.user = current_user
    memory.event = event

    if memory.save
      memory_object = {
        id: memory.id,
        body: memory.body,
        user: {
          id: current_user.id,
          name: current_user.initialize_name,
          image_url: current_user.image_url
        }
      }
      render json: memory_object
    end
  end

  private

  def memory_params
    params.require(:memory).permit(:body, :event_id)
  end

end
