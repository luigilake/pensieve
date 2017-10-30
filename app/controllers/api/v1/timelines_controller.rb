class Api::V1::TimelinesController < ApplicationController

  def index
    render json: Timeline.all
  end

  def show
    @timeline = Timeline.find(params[:id])
    render json: @timeline
  end

end
