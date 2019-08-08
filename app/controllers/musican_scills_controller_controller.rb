class MusicanScillsControllerController < ApplicationController
  def index
	@musican_skill = MusicianSkill.all
	render json: @musican_skill
  end

  def show
	@musican_skill = MusicianSkill.find(params[:id])
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
	@musican_skill = Place.find(params[:id])
    if @musican_skill.update(skill_params)
      render json: @musican_skill, status: :ok
    else
      render json: @musican_skill.errors, status: :unprocessable_entity
    end	
  end

  def destroy
    @place = Place.find(params[:id])
    @place.delete
    head :no_content
  end

  private

  def skill_params
	params.require(:musician_skill).permit(:name)
  end
end
