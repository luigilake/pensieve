class Identity < ActiveRecord::Base
  belongs_to :user

  def self.find_with_omniauth(auth)
    find_by(uid: auth['uid'], provider: auth['provider'])
  end

  def self.create_with_omniauth(auth)
    user = User.find_by(email: auth['info']['email']) || User.create_with_omniauth(auth)
    create(uid: auth['uid'], provider: auth['provider'], user: user)
  end
end
