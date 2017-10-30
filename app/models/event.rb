class Event < ApplicationRecord
  has_many :event_timelines
  has_many :timelines, through: :event_timelines
  has_many :edits
  has_many :users, through: :edits
  has_many :memories

  validates :title, uniqueness: { scope: :date }
  validates :snippet, presence: true
  validates :body, presence: true
  validates :date, presence: true
  validates :location, presence: true
end
