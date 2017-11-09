# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171108205733) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "edits", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_edits_on_event_id"
    t.index ["user_id"], name: "index_edits_on_user_id"
  end

  create_table "event_timelines", force: :cascade do |t|
    t.bigint "event_id"
    t.bigint "timeline_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id", "timeline_id"], name: "index_event_timelines_on_event_id_and_timeline_id", unique: true
    t.index ["event_id"], name: "index_event_timelines_on_event_id"
    t.index ["timeline_id"], name: "index_event_timelines_on_timeline_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.string "snippet", null: false
    t.text "body", null: false
    t.date "date", null: false
    t.string "location", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title", "date"], name: "index_events_on_title_and_date", unique: true
  end

  create_table "identities", force: :cascade do |t|
    t.string "uid"
    t.string "provider"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_identities_on_user_id"
  end

  create_table "memories", force: :cascade do |t|
    t.text "body", null: false
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body"], name: "index_memories_on_body", unique: true
    t.index ["event_id"], name: "index_memories_on_event_id"
    t.index ["user_id"], name: "index_memories_on_user_id"
  end

  create_table "timelines", force: :cascade do |t|
    t.string "title", null: false
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_timelines_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "image_url"
    t.boolean "admin", default: false
  end

end
