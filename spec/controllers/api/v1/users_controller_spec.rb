require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:user1) {User.create(name: 'Gandalf TheWhite', email: 'gandalf@thewhite.com', image_url: 'exampleimage.url')}
  let!(:user2) {User.create(name: 'Aragorn Elessar', email: 'aragorn@thewhite.com', image_url: 'exampleimage.url')}

  let!(:timeline1) {Timeline.create(title: 'History of Gondor', image: "exampleimage.url")}

  let!(:event1) {Event.create(title: 'Seige of Minas Tirith', snippet: 'example snippet1', body: 'example body1', date: Date.new(2001,2,3), location: "Minas Tirith")}
  let!(:event_timeline1) {EventTimeline.create(timeline_id: timeline1.id, event_id: event1.id)}

  let!(:event2) {Event.create(title: 'Seige of Helm\'s Deep', snippet: 'example snippet2', body: 'example body2', date: Date.new(2001,3,4), location: "Helm\'s Deep")}
  let!(:event_timeline2) {EventTimeline.create(timeline_id: timeline1.id, event_id: event2.id)}

  let!(:memory1) {Memory.create(body: "hahahahahahaha", user: user1, event: event1)}
  let!(:memory2) {Memory.create(body: "hohohohohohoho", user: user1, event: event1)}
  let!(:memory3) {Memory.create(body: "hihihihihihihi", user: user1, event: event2)}
  let!(:memory4) {Memory.create(body: "hehehehehehehe", user: user2, event: event2)}

  describe 'GET#index' do
    before do
      get :index
    end

    it 'should return a json' do
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
    end

    it 'should return a json with an array of user objects' do
      returned_json = JSON.parse(response.body)
      expect(returned_json.count).to eq 2
      expect(returned_json[0]['name']).to eq 'Gandalf TheWhite'
      expect(returned_json[1]['name']).to eq 'Aragorn Elessar'
      expect(returned_json[0]['email']).to eq 'gandalf@thewhite.com'
      expect(returned_json[1]['email']).to eq 'aragorn@thewhite.com'
    end
  end
end
