class Api::V1::EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if params[:timeline_id]
      @timeline = Timeline.find(params[:timeline_id])
      @events = @timeline.events.order('date DESC').map do |event|
        {
          id: event.id,
          title: event.title,
          snippet: event.snippet,
          date: event.date.strftime('%^B %d %Y')
        }
      end
      render json: @events
    else
      render json: Event.all
    end
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def destroy
    event_id = params[:id]
    event_to_delete = Event.find(event_id)
    event_to_delete.delete
    render json: Event.all
  end

end
