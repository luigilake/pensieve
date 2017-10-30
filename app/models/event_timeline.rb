class EventTimeline < ApplicationRecord
  belongs_to :event
  belongs_to :timeline

  validates :event_id, uniqueness: { scope: :timeline }
end
