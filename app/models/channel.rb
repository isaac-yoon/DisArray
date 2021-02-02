class Channel < ApplicationRecord
  
  belongs_to :server, optional: true
    foreign_key: :server_id,
    class_name: :Server

end