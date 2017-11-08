class Api::V1::EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if params[:timeline_id]
      @timeline = Timeline.find(params[:timeline_id])
      @events = event_snippet(@timeline)
      render json: @events
    else
      render json: Event.all
    end
  end

  def show
    @event = Event.find(params[:id])
    event = {
      id: @event.id,
      title: @event.title,
      snippet: @event.snippet,
      body: @event.body,
      date: @event.date.strftime('%^B %d %Y'),
      location: @event.location
    }
    render json: event
  end

  def create
    timeline_id = params[:timeline_id]
    new_event = Event.new
    new_event.title = event_params['title']
    new_event.snippet = event_params['snippet']
    new_event.body = event_params['body']
    new_event.date = event_params['date'].to_date
    new_event.location = event_params['location']
    if new_event.save
      EventTimeline.create(event: new_event, timeline_id: timeline_id)
      @timeline = Timeline.find(timeline_id)
      @events = event_snippet(@timeline)
      render json: @events
    else
      existing_event = Event.find_by(title: new_event.title)
      EventTimeline.create(event: existing_event, timeline_id: timeline_id)
      @timeline = Timeline.find(timeline_id)
      @events = event_snippet(@timeline)
      render json: @events
    end
  end

  def destroy
    event_id = params[:id]
    event_to_delete = Event.find(event_id)

    event_to_delete.event_timelines.each do |et|
      et.delete
    end
    event_to_delete.memories.each do |memory|
      memory.delete
    end

    event_to_delete.delete

    render json: Event.all
  end

  private

  def event_params
    params.require(:memory).permit(:title, :snippet, :body, :date, :location)
  end

  def event_snippet(timeline)
    timeline.events.order('date DESC').map do |event|
      {
        id: event.id,
        title: event.title,
        snippet: event.snippet,
        date: event.date.strftime('%^B %d %Y')
      }
    end
  end

end
