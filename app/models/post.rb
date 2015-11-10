class Post < ActiveRecord::Base

  validates :title, presence:   {message: "Must have a title!"},
                    uniqueness: {message: "Title already exists database!"},
                    length:     {minimum: 1}
  validates :body, presence:    {message: "Can't be empty!"},
                    uniqueness: {message: "Title already exists database!"},
                    length:     {minimum: 1}

end
