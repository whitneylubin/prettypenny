class DropJoinTableProductRetailer < ActiveRecord::Migration[5.2]
  def change
    drop_join_table :products, :retailers
  end
end
