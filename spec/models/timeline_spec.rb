require 'rails_helper'

RSpec.describe Timeline, type: :model do

  context 'should have a valid title' do
    it { should have_valid(:title).when('History of Gondor') }
    it { should_not have_valid(:title).when(nil) }
  end

  context 'should optionally be able to have an image' do
    it { should have_valid(:image).when('exampleimage.url') }
    it { should have_valid(:image).when(nil) }
  end

end
