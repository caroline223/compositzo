class User < ApplicationRecord
    has_secure_password
    has_many :entries

    validates :username, presence: true, uniqueness: true, length: { maximum: 15 }
    validates :email, presence: true, uniqueness: true, allow_blank: false 
    validates :password, presence: true, length: { in: 6..30 }
end
