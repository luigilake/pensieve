class User < ApplicationRecord
  has_many :edits
  has_many :memories
  has_many :events, through: :memories

  validates :name, presence: true
  validates :email, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :admin, inclusion: { in: [ true, false ]}

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.email = auth['info']['email']
      user.image_url = auth['info']['image']
    end
  end

end
