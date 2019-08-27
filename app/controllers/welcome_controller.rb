class WelcomeController < ApplicationController
  FIRST_EVENTS_SIZE = 6

  def page
    @places = serialize_recourse(Place.all)
    @events = serialize_recourse(today_events.first(FIRST_EVENTS_SIZE))
  end

  private

  def today_events
    Event.where(start_time: Date.today..(Date.today + 24.hour))
  end
end
