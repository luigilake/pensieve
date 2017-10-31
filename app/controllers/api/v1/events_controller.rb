class Api::V1::EventsController < ApplicationController

  def index
    if params[:timeline_id]
      @timeline = Timeline.find(params[:timeline_id])
      render json: @timeline.events.order('date DESC')
    else
      render json: Event.all
    end
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

end
