class Product < ApplicationRecord
  has_many :locations
  has_many :users
end
