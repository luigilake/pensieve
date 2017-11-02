class Api::V1::TimelinesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Timeline.all
  end

  def show
    @timeline = Timeline.find(params[:id])
    render json: @timeline
  end

  def create
    timeline = Timeline.new
    timeline.title = params['title']
    binding.pry
  end

end
