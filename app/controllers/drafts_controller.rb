class DraftsController < ApplicationController

  def show
    unless session[:uuid] && (not session[:uuid].nil?)
      @redirect_url = request.url
      render 'sessions/index'
    end
    @id = params[:id]
  end

  def index
    @drafts = ActiveDraft.where("updated_at >= ?", 10.minutes.ago).map { |draft| draft.to_hash }
  end

  def create
    ad = ActiveDraft.new(name: params[:name],
                         draft_template: DraftTemplate.all.first)
    state = JSON.parse DraftTemplate.all.first.template
    state['teams']['A']['players'] << {
        uuid: session[:uuid],
        username: session[:username],
    }

    if ENV['add_dummy_users'] == 'true'
      i = 0;
      while i < 20 do
        state['players'] << {uuid: SecureRandom.hex(n = 64), username: "user-" + i.to_s}
        i += 1
      end
    end

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

  def update
    # POST /drafts/<id>
    # body: {
    #   action payload here
    # }
    #
    ad = ActiveDraft.find(params[:id])
    state = ad.state
    team = state['steps'][state['step']]['team'] # "A"/"B"
    if state['teams'][team]['players'][0]['uuid'] == session[:uuid] # is captain
      ad.handle(params)
      ActionCable.server.broadcast "active_draft_#{ad.id}", {draft: ad.to_hash}
    else
      return render json: {status: 'failed', message: 'Invalid secret'}, status: 500
    end
  end


end
