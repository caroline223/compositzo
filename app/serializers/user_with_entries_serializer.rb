class UserWithEntriesSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :fullname, :birthdate, :entries
  has_many :entries 
end
