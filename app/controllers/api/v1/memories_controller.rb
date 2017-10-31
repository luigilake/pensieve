class Api::V1::MemoriesController < ApplicationController

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
end
