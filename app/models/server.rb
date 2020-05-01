class Server < ApplicationRecord
  validates :name, :owner_id, presence: true

  has_one_attached :photo

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: 'User'

end