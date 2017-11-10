require 'rails_helper'

RSpec.describe Identity, type: :model do

  context 'can have a uid' do
    it { should have_valid(:uid).when(1234567) }
  end

  context 'can have a provider' do
    it { should have_valid(:provider).when('facebook') }
    it { should have_valid(:provider).when('github') }

  end

  context 'should have an associated user' do
    it { should have_valid(:user_id).when(1) }
  end
end
