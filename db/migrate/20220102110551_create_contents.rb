class CreateContents < ActiveRecord::Migration[6.1]
  def change
    create_table :contents do |t|
      t.string :comment
      t.string :mood, default: "happy"
      t.integer :entry_id

      t.timestamps
    end
  end
end
