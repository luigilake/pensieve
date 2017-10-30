class Memory < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :body, presence: true, uniqueness: true
end
