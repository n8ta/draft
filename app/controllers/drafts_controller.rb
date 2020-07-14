class DraftsController < ApplicationController

  def show
    @id = params[:id]
  end

  def index
    @drafts = ActiveDraft.where("updated_at >= ?", 10.minutes.ago).map { |draft| draft.to_hash }
  end

  def create
    ad = ActiveDraft.new(name: params[:name],
                         draft_template: DraftTemplate.all.first)
    state = JSON.parse DraftTemplate.all.first.template
    state['teamA']['players'] << {
        uuid: session[:uuid],
        username: session[:username],
    }
    state['secretA'] = session[:secret].to_s

    ad.state = state.as_json

    if ad.save
      ActionCable.server.broadcast "draft", {drafts: [ad.to_hash]}
      render json: {status: 'success', url: '/drafts/' + ad.id.to_s}, status: 200
    else
      puts "FAILED"
      puts ad.errors.inspect
      render json: {status: 'failed'}, status: 500
    end
  end

end
