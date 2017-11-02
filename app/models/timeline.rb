class Timeline < ApplicationRecord
  mount_uploader :image, TimelinePhotoUploader
  has_many :event_timelines
  has_many :events, through: :event_timelines

  validates :title, presence: true, uniqueness: true
end
