class Entry < ApplicationRecord
    has_many :contents
    belongs_to :user 

    validates :date, presence: true, allow_blank: false 
    validates :title, presence: true, uniqueness: true, allow_blank: false, length: {
        maximum: 20,
        too_long: "allows a maxmimum of %{count} characters."
    }  
end
