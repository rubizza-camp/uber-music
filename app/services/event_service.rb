class EventService
  def self.check_params(events_params)
    check_play_time(events_params) && check_musician_skills(events_params)
  end

  def check_play_time(events_params)
    organization = Organization.find(events_params[:organizations])
    org_event_hours = organization.events.where(start_time:
                                                  events_params[:start_time]).map do |event|
      event.start_time.hour - event.end_time.hour
    end
    org_event_hours.reduce(:+) > 2
  end

  def check_musician_skills(events_params)
    organization = Organization.find(events_params[:organizations])
    apr_skilss = organization.users.map do |user|
      if user.approved_musician_skills
        true
      else
        false
      end
    end
    apr_skilss.include?(false) ? false : true
  end
end
