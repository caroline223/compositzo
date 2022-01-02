class Content < ApplicationRecord
    belongs_to :entry

    validates :mood, presence: true, allow_blank: false  
    validates :comment, presence: true, allow_blank: false, length: { 
        maximum: 1000,
        too_long: "%{count} characters is the maximum allowed." 
    }
end
