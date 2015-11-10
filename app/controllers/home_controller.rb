class HomeController < ApplicationController

  def index
    @posts = Post.all
  end


  def new
    @post = Post.new
  end

  def show

  end

end
