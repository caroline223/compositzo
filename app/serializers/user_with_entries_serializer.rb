class UserWithEntriesSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :entries
  has_many :entries 
end
