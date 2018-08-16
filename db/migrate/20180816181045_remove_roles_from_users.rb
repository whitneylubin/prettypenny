class RemoveRolesFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :end_user, :boolean
    remove_column :users, :retail, :boolean
    remove_column :users, :admin, :boolean 
  end
end
