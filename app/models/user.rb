class User < ApplicationRecord
  has_many :locations
  belongs_to :role

end
