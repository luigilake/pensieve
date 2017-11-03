class Api::V1::TimelinesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @timelines = Timeline.all.order('lower(title) ASC')

    render json: @timelines
  end

  def show
    @timeline = Timeline.find(params[:id])
    render json: @timeline
  end

  def create
    @timeline = Timeline.new
    @timeline.title = params['title']
    @timeline.image = params['image']
    @timeline.save
    render json: @timeline
  end

end
