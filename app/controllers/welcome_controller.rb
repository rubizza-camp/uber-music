class WelcomeController < ApplicationController
  FIRST_EVENTS_SIZE = 3

  def page
    @places = serialize_recourse(Place.all)
    @events = serialize_recourse(Event.first(FIRST_EVENTS_SIZE))
  end
end
