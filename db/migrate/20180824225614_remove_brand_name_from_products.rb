class RemoveBrandNameFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :brandname, :string
  end
end
