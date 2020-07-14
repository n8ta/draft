class ActiveDraft < ApplicationRecord
  belongs_to :draft_template
  validates :name, length: {maximum: 250}

  def to_hash
    return {
        id: self.id,
        name: self.name,
        created_at: self.created_at,
        updated_at: self.updated_at,
        state: self.state
    }
  end
end
