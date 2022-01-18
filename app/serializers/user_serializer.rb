class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :fullname, :birthdate, :email, :password, :password_digest
end
