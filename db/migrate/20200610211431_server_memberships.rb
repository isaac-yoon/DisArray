class ServerMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :server_memberships do |t|
      t.integer :member_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end

    # every server is only going to have one member
    add_index :server_memberships, :member_id
    # server_id is automatically generated an index
    # Chef: 'awesome'
    add_index :server_memberships, [:server_id, :member_id], unique: true
  end
end
