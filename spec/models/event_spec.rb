require 'rails_helper'

RSpec.describe Event, type: :model do

  context 'should have a valid title' do
    it { should have_valid(:title).when('The Seige of Minas Tirith') }
    it { should_not have_valid(:title).when(nil) }
  end

  context 'should have a valid snippet' do
    it { should have_valid(:snippet).when('The forces of Minas Morgul attack the White City.') }
    it { should_not have_valid(:snippet).when(nil) }
  end

  context 'should have a valid body' do
    it { should have_valid(:body).when('Tolkien was an excessively verbose writer, so I\'m sure he\'d have a lot to say here. Me? Nah.') }
    it { should_not have_valid(:body).when(nil) }
  end

  context 'should have a valid date' do
    it { should have_valid(:date).when(Date.new(2001,2,3)) }
    it { should_not have_valid(:date).when(nil) }
  end

  context 'should have a valid location' do
    it { should have_valid(:location).when('Minas Tirith') }
    it { should_not have_valid(:location).when(nil) }
  end
end
