class CreateActiveDrafts < ActiveRecord::Migration[6.0]
  def change
    create_table :active_drafts do |t|
      t.references :draft_template
      t.text :name, null: true
      t.integer :step, null: false, default: 0
      t.json :state
      t.timestamps
    end
  end
end
