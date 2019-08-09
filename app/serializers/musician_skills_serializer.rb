class MusicianSkillsSerializer < ActiveModel::Serializer
	attributes :id, :name

	has_many :musician_skill_users
	has_many :users, through: :musician_skill_users
end