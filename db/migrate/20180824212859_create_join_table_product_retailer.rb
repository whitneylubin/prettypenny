class CreateJoinTableProductRetailer < ActiveRecord::Migration[5.2]
  def change
    create_join_table :products, :retailers do |t|
      t.index [:product_id, :retailer_id]
      t.integer :amount
      # t.index [:retailer_id, :product_id]
    end
  end
end
