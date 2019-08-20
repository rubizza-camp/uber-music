class UserPresenter
  attr_reader :user

  def initialize(user)
    @user = user
  end

  def to_json
    json = user.attributes
    json['image'] = user.image
    json['pending_musician_skills'] = user.pending_musician_skills
    json['approved_musician_skills'] = user.approved_musician_skills
    json['organizations'] = user.organizations
    json.with_indifferent_access
  end
end