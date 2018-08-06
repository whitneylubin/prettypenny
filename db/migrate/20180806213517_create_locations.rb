class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :store_number
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :ip_address
      t.string :user_id

      t.timestamps
    end
  end
end
