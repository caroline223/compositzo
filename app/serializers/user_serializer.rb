class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :password_digest
end
