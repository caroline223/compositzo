class EntrySerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :user_id, :mood, :content 

  
  belongs_to :user
end
