class Retailer < ApplicationRecord
  has_many :rebates
  has_many :products, through: :rebates
  has_many :locations
end
