require 'rails_helper'

RSpec.describe User, type: :model do

  context 'should have a valid name' do
    it { should have_valid(:name).when('Gandalf The Grey') }
    it { should_not have_valid(:name).when(nil) }
  end

  context 'should have a valid email' do
    it { should have_valid(:email).when('gthegrey@gmail.com') }
    it { should_not have_valid(:email).when('fakeemailaddress') }
    it { should_not have_valid(:email).when(nil) }
  end

  context 'may optionally have an image' do
    it { should have_valid(:image_url).when('exampleimage.url') }
    it { should have_valid(:image_url).when(nil) }
  end

end
