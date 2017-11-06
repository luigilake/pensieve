class Api::V1::MemoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if params[:event_id]
      @event = Event.find(params[:event_id])
      @memories = @event.memories
      @memories_payload = @memories.map do |memory|
        memory_structure(memory)
      end
      render json: @memories_payload
    else
      memories = Memory.all.map do |memory|
        memory_structure(memory)
      end
      render json: memories
    end
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

  def destroy
    memory_id = params[:id]
    memory_to_delete = Memory.find(memory_id)
    memory_to_delete.delete
    memories = Memory.all.map do |memory|
      memory_structure(memory)
    end
    render json: memories
  end

  private

  def memory_params
    params.require(:memory).permit(:body, :event_id)
  end

  def memory_structure(memory)
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

end
