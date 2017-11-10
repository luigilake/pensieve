require 'rails_helper'

RSpec.describe Api::V1::EventsController, type: :controller do
  let!(:timeline1) {Timeline.create(title: 'History of Gondor', image: "exampleimage.url")}

  let!(:event1) {Event.create(title: 'Seige of Minas Tirith', snippet: 'example snippet1', body: 'example body1', date: Date.new(2001,2,3), location: "Minas Tirith")}
  let!(:event_timeline1) {EventTimeline.create(timeline_id: timeline1.id, event_id: event1.id)}

  let!(:event2) {Event.create(title: 'Seige of Helm\'s Deep', snippet: 'example snippet2', body: 'example body2', date: Date.new(2001,3,4), location: "Helm\'s Deep")}
  let!(:event_timeline2) {EventTimeline.create(timeline_id: timeline1.id, event_id: event2.id)}

  describe 'GET#index' do
    before do
      get :index
    end

    it 'should return a json' do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it 'should return a json with an array of event objects' do
      returned_json = JSON.parse(response.body)
      expect(returned_json[0]['title']).to eq 'Seige of Minas Tirith'
      expect(returned_json[1]['title']).to eq 'Seige of Helm\'s Deep'
    end

    it 'should return a json with an array of event objects, each with a title, snippet, body, date, and location' do
      returned_json = JSON.parse(response.body)
      expect(returned_json[0]['title']).to eq 'Seige of Minas Tirith'
      expect(returned_json[0]['snippet']).to eq 'example snippet1'
      expect(returned_json[0]['body']).to eq 'example body1'
      expect(returned_json[0]['date']).to eq '2001-02-03'

      expect(returned_json[1]['title']).to eq 'Seige of Helm\'s Deep'
      expect(returned_json[1]['snippet']).to eq 'example snippet2'
      expect(returned_json[1]['body']).to eq 'example body2'
      expect(returned_json[1]['date']).to eq '2001-03-04'
    end
  end

  describe 'GET#show' do
    before do
      get :show, params: { timeline_id: timeline1.id, id: event1.id }
    end

    it 'should return a json' do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it 'should return a json with an event object with a title, snippet, body, date, and location' do
      returned_json = JSON.parse(response.body)
      expect(returned_json['title']).to eq 'Seige of Minas Tirith'
      expect(returned_json['snippet']).to eq 'example snippet1'
      expect(returned_json['body']).to eq 'example body1'
      expect(returned_json['date']).to eq 'FEBRUARY 03 2001'
    end
  end

end
