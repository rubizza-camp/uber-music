class MusicianSkillsController < ApplicationController
  authorize_resource
  before_action :set_musician_skill, only: %i[show update destroy]

  def index
    @musician_skills = MusicianSkill.all.order('created_at DESC')
    render json: @musician_skills
  end

  def show
    render json: @musician_skill
  end

  def create
    @musician_skill = MusicianSkill.new(skill_params)
    if @musician_skill.save!
      render json: @musician_skill, status: :created
    else
      render json: @musician_skill.errors, status: :unprocessable_entity
    end
  end

  def update
    if @musician_skill.update!(skill_params)
      render json: @musician_skill, status: :ok
    else
      render json: @musician_skill.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @musician_skill.delete
      head :no_content
    else
      render json: @musician_skill.errors, status: :unprocessable_entity
    end
  end

  private

  def set_musician_skill
    @musician_skill = MusicianSkill.find(skill_params[:id])
  end

  def skill_params
    params.require(:musician_skill).permit(:name, :id)
  end
end
