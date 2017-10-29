class User < ApplicationRecord
  validates :name, presence: true
  validates :email, uniqueness: true
  validates :admin, inclusion { in: [ true, false ]}

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
