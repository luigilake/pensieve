require 'rails_helper'

RSpec.describe Memory, type: :model do

  context 'should have a valid body' do
    it { should have_valid(:body).when('oh man, this was crazy. Especially when the army of the dead came by!') }
    it { should_not have_valid(:body).when(nil) }
  end

  context 'should have a valid foreign keys' do
    it { should have_valid(:user_id).when(1) }
    it { should have_valid(:event_id).when(1) }
  end

end
