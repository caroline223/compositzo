class Entry < ApplicationRecord
    belongs_to :user 

    validates :date, presence: true, allow_blank: false 
    validates :title, presence: true, uniqueness: true, allow_blank: false, length: {
        minimum: 10,
        too_short: "has a minimum of %{count} characters."
    }  
    validates :mood, presence: true, allow_blank: false  
    validates :content, presence: true, allow_blank: false, length: { 
        maximum: 2000,
        too_long: "%{count} characters is the maximum allowed." 
    }
end
