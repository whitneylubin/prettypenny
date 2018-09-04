class Product < ApplicationRecord
  has_many :locations
  has_many :users
  has_many :rebates
  has_many :retailers, through: :rebates
end
