class CreateMemories < ActiveRecord::Migration[5.1]
  def change
    create_table :memories do |t|
      t.text :body, null:false
      t.belongs_to :user
      t.belongs_to :event

      t.timestamps null:false
    end

    add_index :memories, :body, unique: true
  end
end
