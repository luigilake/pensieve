require 'rails_helper'

RSpec.describe EventTimeline, type: :model do

  context 'should have valid foreign ids' do
    it { should have_valid(:event_id).when(1) }
    it { should have_valid(:timeline_id).when(1) }
  end
end
