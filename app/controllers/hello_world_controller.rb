# frozen_string_literal: true

class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
#below just demonstrating how to use rails to serve up data as .json that a seperate react app would serve up
  #   respond_to do |format|
  #    format.html
  #    format.json { render :json => @hello_world_props.to_json }
  #   end
  end
end
