FactoryBot.define do
  factory :event do
    name { 'Test' }
    description { 'TestDesc' }
    start_time { Date.today }
    end_time { Date.today } 
  end
end