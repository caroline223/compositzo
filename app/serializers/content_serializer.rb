class ContentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :mood, :entry_id
end
