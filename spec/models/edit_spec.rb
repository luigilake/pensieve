require 'spec_helper'

RSpec.describe Edit, type: :model do

  context 'should have valid foreign keys' do
    it { should have_valid(:user_id).when(1) }
    it { should have_valid(:event_id).when(1) }
  end
end
