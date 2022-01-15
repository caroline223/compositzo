class EntriesController < ApplicationController

    def index
        render json: @current_user.entries, status: :ok
    end

    def show 
        entry = find_entry
        if entry
            render json: entry, status: :ok
        else
            render_not_found_response
        end
    end

    def create
        entry = @current_user.entries.create!(entry_params)
        if entry.valid?
            render json: entry, status: :created 
        else
            render_unprocessable_entity_error
        end
    end

    def update 
        entry = find_entry 
        if entry.valid?
            entry.update!(entry_params)
            render json: entry, status: :accepted 
        else
            render_unprocessable_entity_error
        end
    end

    def destroy 
        entry = find_entry
        if entry 
            entry.destroy 
            head :no_content 
        else 
            render_not_found_response
        end
    end

   
    private

    def find_entry
        @current_user.entries.find_by_id(params[:id])
    end

    def entry_params
        params.require(:entry).permit(:date, :title, :user_id, :mood, :content)
    end

   


end
