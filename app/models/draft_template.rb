class DraftTemplate < ApplicationRecord
  validates :name, presence: true
  validates :template, presence: true


  def self.actions
    {
        :pick_player => "PICK_PLAYER",
        :pick_hero => "PICK_HERO",
        :ban_hero => "BAN_HERO",
    }
  end

  def self.teamA
    return "A"
  end

  def self.teamB
    return "B"
  end

  def self.pick
    return Proc.new do |team|
      {team: team, action: self.actions[:pick_player]}
    end

  end

  def self.hero
    return Proc.new do |team|
      {team: team, action: self.actions[:pick_hero]}
    end

  end

  def self.ban
    return Proc.new do |team|
      {team: team, action: self.actions[:ban_hero]}
    end
  end

end