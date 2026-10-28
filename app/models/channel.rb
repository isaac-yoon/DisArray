class Channel < ApplicationRecord
  
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

end