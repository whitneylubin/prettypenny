class RemoveRebateValueFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :rebate_value, :integer
  end
end
