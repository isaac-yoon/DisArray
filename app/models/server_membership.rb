class ServerMembership < ApplicationRecord
  validates :member_id, presence: true, uniqueness: { scope: :server_id, message: 'Member already exists in server' }
  validates :server_id, presence: true

  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User
  
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
end