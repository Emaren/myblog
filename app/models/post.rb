class Post < ActiveRecord::Base

  validates presence: true, uniqueness: true

end
