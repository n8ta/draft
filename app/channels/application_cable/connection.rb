module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :uuid

    def session
      @request.session
    end

    def connect
      self.uuid = SecureRandom.urlsafe_base64
    end
  end
end
