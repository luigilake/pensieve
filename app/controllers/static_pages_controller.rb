class StaticPagesController < ApplicationController
  def index
    render :'static_pages/index'
  end
end
