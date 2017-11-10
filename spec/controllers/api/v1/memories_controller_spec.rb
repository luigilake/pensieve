require 'rails_helper'

RSpec.describe Api::V1::MemoriesController, type: :controller do
  let!(:user1) {User.create(name: 'Gandalf TheWhite', email: 'gandalf@thewhite.com', image_url: 'exampleimage.url')}
  let!(:timeline1) {Timeline.create(title: 'History of Gondor', image: "exampleimage.url")}

  let!(:event1) {Event.create(title: 'Seige of Minas Tirith', snippet: 'example snippet1', body: 'example body1', date: Date.new(2001,2,3), location: "Minas Tirith")}
  let!(:event_timeline1) {EventTimeline.create(timeline_id: timeline1.id, event_id: event1.id)}

  let!(:event2) {Event.create(title: 'Seige of Helm\'s Deep', snippet: 'example snippet2', body: 'example body2', date: Date.new(2001,3,4), location: "Helm\'s Deep")}
  let!(:event_timeline2) {EventTimeline.create(timeline_id: timeline1.id, event_id: event2.id)}

  let!(:memory1) {Memory.create(body: "hahahahahahaha", user: user1, event: event1)}
  let!(:memory2) {Memory.create(body: "hohohohohohoho", user: user1, event: event1)}
  let!(:memory3) {Memory.create(body: "hihihihihihihi", user: user1, event: event2)}
  let!(:memory4) {Memory.create(body: "hehehehehehehe", user: user1, event: event2)}

  describe 'GET#index' do
    before do
      get :index
    end

    it 'should return a json' do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it 'should return a json with an array of memory objects' do
      returned_json = JSON.parse(response.body)
      expect(returned_json.count).to eq 4
      expect(returned_json[0]['body']).to eq 'hahahahahahaha'
      expect(returned_json[1]['body']).to eq 'hohohohohohoho'
      expect(returned_json[2]['body']).to eq 'hihihihihihihi'
      expect(returned_json[3]['body']).to eq 'hehehehehehehe'
    end

    it 'should return a json with an array of memories, each with a body, a user with an id, name, and image_url' do
      returned_json = JSON.parse(response.body)
      expect(returned_json[0]['body']).to eq 'hahahahahahaha'
      expect(returned_json[0]['user']['name']).to eq 'Gandalf T'
      expect(returned_json[1]['body']).to eq 'hohohohohohoho'
      expect(returned_json[1]['user']['image_url']).to eq 'exampleimage.url'
      expect(returned_json[2]['body']).to eq 'hihihihihihihi'
      expect(returned_json[2]['user']['name']).to eq 'Gandalf T'
      expect(returned_json[3]['body']).to eq 'hehehehehehehe'
      expect(returned_json[3]['user']['image_url']).to eq 'exampleimage.url'
    end
  end

  describe 'GET#index with params' do
    before do
      get :index, params: { event_id: event1.id }
    end

    it 'should return a json' do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it 'should return a json with an array of memory objects associated with that event' do
      returned_json = JSON.parse(response.body)
      expect(returned_json[0]['body']).to eq 'hahahahahahaha'
      expect(returned_json[0]['user']['name']).to eq 'Gandalf T'
      expect(returned_json[1]['body']).to eq 'hohohohohohoho'
      expect(returned_json[1]['user']['image_url']).to eq 'exampleimage.url'
    end
  end
end
