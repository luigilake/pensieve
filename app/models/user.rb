class User < ApplicationRecord
  has_many :edits
  has_many :memories
  has_many :events, through: :memories
  has_many :identities

  validates :name, presence: true
  validates :email, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :admin, inclusion: { in: [ true, false ]}

  def self.create_with_omniauth(auth)

    name;
    if auth['info']['last_name']
      name = "#{auth['info']['first_name']} #{auth['info']['last_name']}"
    else
      name = auth["info"]["name"]
    end

    create! do |user|
      user.name = name || "User Name"
      user.email = auth['info']['email']
      user.image_url = auth['info']['image']
    end
  end

  def initialize_name
    initialized = name.split(' ')
    "#{initialized[0]} #{initialized[1][0]}"
  end

end
