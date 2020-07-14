class ActiveDraftChannel < ApplicationCable::Channel
  def subscribed
    id = params[:room_id]
    ad = ActiveDraft.find(id)
    stream_from "active_draft_#{id}"
    sleep 0.3.seconds
    ActionCable.server.broadcast "active_draft_#{id}", {draft: ad.to_hash}
  end
end