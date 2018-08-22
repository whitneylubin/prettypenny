# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create("image"=>"imagepath.png","brandname"=>"MAC",
  "productname"=>"Studio Fix Powder Plus Foundation", "size"=>"0.52 oz",
  "retailername"=>"Ulta", "rebatevalue"=>"$5.00")

Product.create("image"=>"imagepath.png","brandname"=>"Benefit Cosmetics",
  "productname"=>"Roller Lash Super Curling & Lifting Mascara", "size"=>"0.3 oz",
  "retailername"=>"Sephora, Ulta", "rebatevalue"=>"$3.50")

Product.create("image"=>"imagepath.png","brandname"=>"Neutrogena",
  "productname"=>"Hydroboost Hydrating Serum", "size"=>"1.0 oz",
  "retailername"=>"Walmart, CVS, Sally", "rebatevalue"=>"$2.00")

Product.create("image"=>"imagepath.png","brandname"=>"Deva Curl",
  "productname"=>"Leave-In Decadence", "size"=>"8.0 oz",
  "retailername"=>"Walmart, Sally Beauty Supply", "rebatevalue"=>"$1.00")

Product.create("image"=>"imagepath.png","brandname"=>"SheaMoisture",
  "productname"=>"Superfruit Multi-Vitamin Frizz-Taming Smoothie", "size"=>"12.0 oz",
  "retailername"=>"CVS, Sally Beauty Supply", "rebatevalue"=>"$3.50")

Product.create("image"=>"imagepath.png","brandname"=>"ESSIE",
  "productname"=>"Soda Pop Nail Polish Collection", "size"=>"0.46 oz",
  "retailername"=>"Sally Beauty Supply, Elegant Beauty", "rebatevalue"=>"$1.00")

Product.create("image"=>"imagepath.png","brandname"=>"Dermalogica",
  "productname"=>"Phyto Replenish Oil", "size"=>"1.0 oz",
  "retailername"=>"Ulta, Sephora", "rebatevalue"=>"$4.00")

Product.create("image"=>"imagepath.png","brandname"=>"Completely Bare",
  "productname"=>"Bikini Bump Blaster Ingrown Hair & Bikini Bump Eliminator",
  "size"=>"50 ct", "retailername"=>"Sephora, Ulta", "rebatevalue"=>"$0.75")

Product.create("image"=>"imagepath.png","brandname"=>"Yves Saint Laurent",
  "productname"=>"Black Opium Eau de Parfum", "size"=>"3.0 oz",
  "retailername"=>"Macys", "rebatevalue"=>"$10.00")

Product.create("image"=>"imagepath.png","brandname"=>"Morphe",
  "productname"=>"Jaclyn Hill Eyeshadow Palette", "size"=>"1.98 oz",
  "retailername"=>"Sally BEauty Supply, Macys, Ulta", "rebatevalue"=>"$3.25")
