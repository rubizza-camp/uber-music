module Api
  class MusicianSkillsController < ApplicationController
    before_action :set_musican_skill, only: %i[show update destroy]

    def index
      @musican_skill = MusicianSkill.all.order('created_at DESC')
      render json: @musican_skill
    end

    def show
      render json: @musican_skill
    end

    def create
      @musican_skill = MusicianSkill.new(skill_params)
      if @musican_skill.save
        render json: @musican_skill, status: :created
      else
        render json: @musican_skill.errors, status: :unprocessable_entity
      end
    end

    def update
      if @musican_skill.update(skill_params)
        render json: @musican_skill, status: :ok
      else
        render json: @musican_skill.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @musican_skill.delete
      head :no_content
    end

    private

    def set_musican_skill
      @musican_skill = User.find(params[:id])
    end

    def skill_params
      params.require(:musician_skill).permit(:name)
    end
  end
end
