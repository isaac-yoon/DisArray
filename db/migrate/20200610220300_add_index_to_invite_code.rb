class AddIndexToInviteCode < ActiveRecord::Migration[5.2]
  def change
    add_index :servers, :invite_code, unique: true
  end
end
