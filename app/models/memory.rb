class Memory < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :body, uniqueness: true
end
