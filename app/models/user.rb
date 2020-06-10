class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :servers,
    foreign_key: :owner_id,
    class_name: :Server
  
  has_many :server_memberships,
    foreign_key: :member_id,
    class_name: :ServerMembership
  
  has_many :servers,
    through: :server_memberships,
    source: :server
  

  def self.find_by_credentials(un, pw)
    user = User.find_by(username: un)
    return nil unless user && user.is_password?(pw)
    user
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
end
