class RetailerController < ApplicationController
  def index
    rebates = product.rebates.order(amount::desc)
    @top_rebates=[]
    max_rebate=rebates.first.amount

    rebates.map do |r|
      if r.amount > max_rebate
        max_rebate = r.amount
        @top_rebates=[r]
      elsif (r.amount == max_rebate)

        @top_rebates << r
          p @top_rebates
      end
    end
end
