class Rebate < ApplicationRecord
  belongs_to :product
  belongs_to :retailer
end
