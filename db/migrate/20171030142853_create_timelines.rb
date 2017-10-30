class CreateTimelines < ActiveRecord::Migration[5.1]
  def change
    create_table :timelines do |t|
      t.string :title, null:false
      t.string :image
      
      t.timestamps null:false
    end

    add_index :timelines, :title, unique: true
  end
end
