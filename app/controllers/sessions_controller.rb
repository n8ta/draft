class SessionsController < ApplicationController
  def index
  end

  def create
    puts "----"
    puts params
    if params[:username] and params[:username].length > 0
      session[:username] = params[:username]
      session[:uuid] = SecureRandom.hex(n=64)
      session[:secret] = SecureRandom.hex(n=64)
      return render json: {status: 'success', url: '/drafts'}
    else
      return render json: {status: 'failed', msg: 'Failed, maybe the username was too short?'}
    end
  end

end
