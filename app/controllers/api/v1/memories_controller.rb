class Api::V1::MemoriesController < ApplicationController

  def index
    @event = Event.find(params[:event_id])
    @memories = @event.memories
    render json: @memories
  end
end
