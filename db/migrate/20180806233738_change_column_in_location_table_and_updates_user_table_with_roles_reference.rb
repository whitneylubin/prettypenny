class ChangeColumnInLocationTableAndUpdatesUserTableWithRolesReference < ActiveRecord::Migration[5.2]
  def change
    change_column(:locations, :user_id, :reference)
    create_table :roles do |t|
      t.string :name
      t.string :description
    end
    Role.create(name: "Admin", description: "Super user")
    Role.create(name: "Retailer", description: "Retail Company")
    Role.create(name: "Shopper", description: "User using app")
    remove_column(:users, :end_user)
    remove_column(:users, :admin)
    remove_column(:users, :retail)
    add_column(:users, :role_id, :reference)
  end
end
