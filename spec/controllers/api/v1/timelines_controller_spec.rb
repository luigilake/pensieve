require 'rails_helper'

RSpec.describe Api::V1::TimelinesController, type: :controller do
  let!(:timeline1) {Timeline.create(title: 'History of Gondor', image: "exampleimage.url")}
  let!(:timeline2) {Timeline.create(title: 'History of Rohan', image: "exampleimage.url")}

  describe 'GET#index' do
    before do
      get :index
    end

    it 'should return a json' do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it 'should return a json with an array of timeline objects' do
      returned_json = JSON.parse(response.body)
      expect(returned_json[0]['title']).to eq 'History of Gondor'
      expect(returned_json[1]['title']).to eq 'History of Rohan'
    end

    it 'should return a json with an array of timeline objects, each with a title and an image url' do
      returned_json = JSON.parse(response.body)
      expect(returned_json[0]['title']).to eq 'History of Gondor'
      expect(returned_json[1]['title']).to eq 'History of Rohan'
    end
  end

  describe 'GET#show' do
    before do
      get :show, params: { id: timeline1.id }
    end

    it 'should return a json' do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it 'should return a json of a timeline object' do
      returned_json = JSON.parse(response.body)
      expect(returned_json['title']).to eq 'History of Gondor'
    end
  end
end
