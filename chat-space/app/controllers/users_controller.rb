class UsersController < ApplicationController

  def edit
  end

  def index
    @users = User.where('name LIKE(?)', "%#{userindex_params[:user]}%").where.not(id: current_user.id)
    respond_to do |format|
      format.json
    end
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

  def userindex_params
    params.permit(:user)
  end
end
