class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  has_many :user_genres
  has_many :genres, through: :user_genres
  has_one  :image, as: :imageable
  has_many :musician_skill_users
  has_many :musician_skills, through: :musician_skill_users
  has_many :pending_musician_skill_users,
           -> { where status: MusicianSkillUser.statuses[:pending] },
           class_name: 'MusicianSkillUser'
  has_many :pending_musician_skills,
           through: :pending_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skill
  has_many :disabled_musician_skill_users,
           -> { where status: MusicianSkillUser.statuses[:disabled] },
           class_name: 'MusicianSkillUser'
  has_many :disabled_musician_skills,
           through: :disabled_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skill
  has_many :approved_musician_skill_users,
           -> { where status: MusicianSkillUser.statuses[:approved] },
           class_name: 'MusicianSkillUser'
  has_many :approved_musician_skills,
           through: :approved_musician_skill_users,
           class_name: 'MusicianSkill',
           source: :musician_skill
  has_many :user_organizations
  has_many :organizations, through: :user_organizations
  accepts_nested_attributes_for :musician_skills
  accepts_nested_attributes_for :musician_skill_users
  accepts_nested_attributes_for :user_genres
  accepts_nested_attributes_for :genres

  def role?(role_name)
    type == role_name
  end
  
  def full_name
    @full_name = first_name + ' ' + second_name
  end
end
