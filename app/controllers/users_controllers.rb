class UserController < ApplicationController
  #Require user be signed in
  before_action :authenticate_user!
