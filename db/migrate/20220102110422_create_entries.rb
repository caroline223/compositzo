class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.date :date
      t.string :title
      t.integer :user_id

      t.timestamps
    end
  end
end
