class Server < ApplicationRecord
  validates :name, :owner_id, presence: true

  has_one_attached :photo

  belongs_to :owner, optional: true
    foreign_key: :owner_id,
    class_name: 'User'
  
  has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy

  has_many :server_memberships,
    foreign_key: :server_id,
    class_name: :ServerMembership,
    dependent: :destroy
  
  has_many :members,
    through: :server_memberships,
    source: :member
  
  after_create :create_default_channel
  
  def create_default_channel
    Channel.create(name: 'General', server_id: self.id)
  end
end