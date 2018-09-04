class CreateRebates < ActiveRecord::Migration[5.2]
  def change
    create_table :rebates do |t|
      t.references :product, foreign_key: true
      t.references :retailer, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
