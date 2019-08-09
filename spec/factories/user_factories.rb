FactoryBot.define do

  factory :user do
    nickname { 'alex' }
    first_name { 'Sasha' }
    second_name { 'Bublicov' }
    type { 'User' }
    email { 'bublicov@gmail.com' }
    password { 'blabla' }
  end
end
