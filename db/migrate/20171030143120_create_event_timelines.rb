class CreateEventTimelines < ActiveRecord::Migration[5.1]
  def change
    create_table :event_timelines do |t|
      t.belongs_to :event
      t.belongs_to :timeline

      t.timestamps null:false
    end

    add_index :event_timelines, [:event_id, :timeline_id], unique: true
  end
end
