class CreateEdits < ActiveRecord::Migration[5.1]
  def change
    create_table :edits do |t|
      t.belongs_to :user
      t.belongs_to :event

      t.timestamps null:false
    end
  end
end
