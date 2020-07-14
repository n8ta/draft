class DraftChannel < ApplicationCable::Channel
  def subscribed
    stream_from "draft"
  end
end