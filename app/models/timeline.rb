class Timeline < ApplicationRecord
  has_many :event_timelines
  has_many :events, through: :event_timelines

  validates :title, uniqueness: true
end
