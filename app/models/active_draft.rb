class ActiveDraft < ApplicationRecord
  belongs_to :draft_template
  validates :name, length: {maximum: 250}

  def add_user(uuid, username)
    state = self.state
    teamA =  state['teams']['A']['players'].map{|p| p['uuid']}
    teamB =  state['teams']['B']['players'].map{|p| p['uuid']}
    unpicked = state['players'].map{|p| p['uuid']}
    unless (teamA+teamB+unpicked).include?(uuid)
      state['players'] << {uuid: uuid, username: username}
    end
    self.state = state.as_json
    self.save
  end

  def handle(payload)
    state = self.state
    step = state['steps'][self.state['step']]
    team = step['team']
    otherTeam = step['team'] == 'A' ? 'B' : 'A'
    puts "TEAM/OTHER"
    puts team
    puts otherTeam
    step_action = step['action']
    index = payload['index']
    case step_action
    when "PICK_CAPTAIN"
      cap = state['players'][index]
      state['players'].delete(cap)
      state['teams']["B"]["players"] << cap
    when "PICK_PLAYER"
      pick = state['players'][index]
      state['players'].delete(pick)
      state['teams'][team]['players'] << pick
    when "PICK_HERO"
      pick = state['heros'][index]
      state['heros'].delete(pick)
      state['teams'][team]['heros'] << pick
    when "BAN_HERO"
      pick = state['heros'][index]
      state['heros'].delete(pick)
      state['banned_heros'] << pick
    end
    state['step'] = state['step']+1
    self.save
  end

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
