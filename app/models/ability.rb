# frozen_string_literal: true

# rubocop:disable Metrics/MethodLength, Metrics/AbcSize

class Ability
  include CanCan::Ability
  def initialize(user)
    if user.nil?
      user = User.new
      user.update(type: 'Guest')
    end

    if user.role?('Moderator')
      can :manage, :all
    elsif user.role?('User')
      can %i[index show], [Event, Genre, Organization, MusicianSkill, User]
      can :manage, Event do |event|
        user.organization_ids.each do |organization_id|
          event.organization_ids.include?(organization_id)
        end
      end
      can :manage, Organization do |organization|
        organization if organization.user_ids.include?(user.id)
      end
    else
      can %i[index show], [Place, Event]
    end
  end
end
# rubocop:enable Metrics/MethodLength, Metrics/AbcSize
