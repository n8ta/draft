class CreateDraftTemplates < ActiveRecord::Migration[6.0]
  def change
    create_table :draft_templates do |t|
      t.json :template
      t.string :name
      t.timestamps
    end
  end
end
