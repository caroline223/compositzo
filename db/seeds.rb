require 'faker'
User.destroy_all
Entry.destroy_all



User.create(fullname: "Caroline Forrester", birthdate: Faker::Date.backward(days: 7000),  username: "Caroline", password: "chocolate", email: "caroline22@email.com")
User.create(fullname: "Jessica Simpson",  birthdate: Faker::Date.backward(days: 7000), username: "Jessica", password: "vanilla", email: "jessica43@email.com")
User.create(fullname: "Ricardo Martinez", birthdate: Faker::Date.backward(days: 7000), username: "Ricardo", password: "basketball", email: "ricardojones@email.com")


5.times do 
    id = User.all.sample.id
    Entry.create( date: Faker::Date.backward(days: 4000), 
                  title: Faker::Book.title, 
                  user_id: id, 
                  mood: "Happy",
                  content: Faker::Lorem.paragraph(sentence_count: 4)
                  )
end



