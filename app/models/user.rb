class User < ActiveRecord::Base
  before_create :skip_confirmation!
  include DeviseTokenAuth::Concerns::User
end
