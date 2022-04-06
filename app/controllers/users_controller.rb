class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def index
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end



    def show
        if @current_user 
            render json: @current_user, serializer: UserWithEntriesSerializer
        else
            render_not_found_response
        end

    end


    def destroy
        if @current_user
            @current_user.destroy
            head :no_content
        else
            render_not_found_response
        end
    end


    private 

    def find_user
        User.find_by_id(params[:id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :fullname, :birthdate)
    end


end
