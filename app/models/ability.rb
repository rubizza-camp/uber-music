# frozen_string_literal: true

class Ability
  include CanCan::Ability
  def initialize(user)
    if user.nil?
      user = User.new
      user.update(type: 'Guest')
    end
    autorizing(user)
  end

  def autorizing(user)
    if user.role?('Moderator')
      can :manage, :all
    elsif user.role?('User')
      user_rules
    else
      can %i[index show], [Place, Event]
    end
  end

  def user_rules
    can %i[index show], [Event, Genre, Organization, Place, MusicianSkill, User]
    can :manage, Event do |event|
      user.organization_ids.each do |organization_id|
        event.organization_ids.include?(organization_id)
      end
    end
    can :manage, Organization do |organization|
      organization if organization.user_ids.include?(user.id)
    end
  end
end
