<<<<<<< HEAD
=======
require 'rails_helper'

>>>>>>> Create controleer for musican scills model
RSpec.describe MusicianSkillsController, type: :controller do
  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end
end
