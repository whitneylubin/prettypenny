# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_06_233738) do

# Could not dump table "locations" because of following StandardError
#   Unknown type 'reference' for column 'user_id'

  create_table "locations_products", id: false, force: :cascade do |t|
    t.integer "location_id", null: false
    t.integer "product_id", null: false
    t.index ["location_id", "product_id"], name: "index_locations_products_on_location_id_and_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "rebate_value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "description"
  end

# Could not dump table "users" because of following StandardError
#   Unknown type 'reference' for column 'role_id'

end
