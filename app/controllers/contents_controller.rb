class ContentsController < ApplicationController

    def index
        render json: Content.all, status: :ok 
    end

   def show
    content = find_content
        if content 
            render json: content, status: :ok
        else
            render_not_found_response
        end
   end

  
   def create
    content = Content.create!(content_params)
        if content.valid?
            render json: content, status: :created
        else
            render_unprocessable_entity_error
        end 
   end


   def update
       content = find_content
       if content
        content.update!(content_params)
        render json: content, status: :accepted 
       else
        render_unprocessable_entity_error
       end
   end

   def destroy 
    content = find_content
        if content 
            content.destroy 
            head :no_content
        else
            render_not_found_response
        end
   end

    
   private

    
    def find_content
        Content.find_by_id(params[:id])
    end

    def content_params
        params.require(:content).permit(:comment, :entry_id, :mood)
    end


end
