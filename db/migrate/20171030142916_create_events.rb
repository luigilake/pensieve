class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null:false
      t.string :snippet, null:false
      t.text :body, null:false
      t.date :date, null:false
      t.string :location, null:false

      t.timestamps null: false
    end

    add_index :events, [:title, :date], unique: true
  end
end
