FactoryBot.define do
  factory :place do
    name { 'Street' }
    latitude { 1111.1111 }
    longitude { 2222.2222 }
    address { 'Masherova' }
    description { 'Good place' }
    rules { 'No rules' }
  end
end
