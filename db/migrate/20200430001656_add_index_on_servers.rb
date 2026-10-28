class AddIndexOnServers < ActiveRecord::Migration[5.2]
  def change
    add_index :servers, :owner_id
  end
end
