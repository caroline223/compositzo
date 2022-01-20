class User < ApplicationRecord
    has_secure_password
    has_many :entries

    validates :fullname, presence: true, uniqueness: false, allow_blank: false, length: { in: 6..30 }
    validates :birthdate, presence: true, uniqueness: false, allow_blank: false
    validates :username, presence: true, uniqueness: true, length: { in: 6..30 }
    validates :email, presence: true, uniqueness: true, allow_blank: false 
    validates :password, presence: true, length: { in: 6..30 }
end
