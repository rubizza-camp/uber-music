FactoryBot.define do
  factory :place do
    name { 'Street' }
    latitude { 53.917762 }
    longitude { 27.566064 }
    address { 'Masherova' }
    description { 'Good place' }
    rules { 'No rules' }
  end
end
