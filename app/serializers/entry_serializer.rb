class EntrySerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :user_id

  has_many :contents
  belongs_to :user
end
