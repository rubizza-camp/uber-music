RSpec.describe Api::PlacesController do

  describe "GET #index" do
    before do
      create(:place)
      get :index
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "JSON body response contains expected recipe attributes" do
      json_response = JSON.parse(response.body)
      expect(json_response.first.keys).to match_array(%w(id name latitude longitude
                                                         address description rules events images))
    end
  end
end
