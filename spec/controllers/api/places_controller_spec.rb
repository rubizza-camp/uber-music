require 'rails_helper'

RSpec.describe Api::PlacesController do

  describe "GET #index" do

    let!(:place) { create(:place) }
    let(:json_response) { JSON.parse(response.body) }

    before do
      get :index
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response contains expected recipe attributes" do
      expect(json_response.first.keys).to match_array(%w(id name latitude longitude
                                                         address description rules events images))
    end
  end
end
