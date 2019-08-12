user = User.create(
  nickname: Faker::TvShows::FamilyGuy.character,
  first_name: Faker::Name.first_name, 
  second_name: Faker::Name.last_name, 
  type: 'User', 
  email: Faker::Internet.free_email, 
  password: Faker::Name.last_name
  )

Genre.create(
  name: Faker::Music.genre, 
  description: Faker::JapaneseMedia::SwordArtOnline.item
  )

user.genres << Genre.first

organization = Organization.create(
  name: Faker::Music.band,
  description: Faker::JapaneseMedia::SwordArtOnline.item
  )

user.organizations << Organization.first

3.times do  
  Place.create(
    name: Faker::TvShows::FamilyGuy.location, 
    latitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
    longitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
    address: Faker::Address.street_address, 
    description: Faker::JapaneseMedia::SwordArtOnline.item, 
    rules: Faker::Books::Lovecraft.fhtagn
    )
end


(0..2).each do |x|
  Event.create(
    place_id: "#{Place.ids[x]}", 
    name: Faker::FunnyName.name, 
    description: Faker::JapaneseMedia::SwordArtOnline.item, 
    start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default), 
    end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
    )
end

organization.pending_events << Event.first

organization.disabled_events << Event.second

organization.approved_events << Event.last

3.times do
  MusicianSkill.create(name: Faker::Music.instrument)
end

user.pending_musician_skills << MusicianSkill.first

user.disabled_musician_skills << MusicianSkill.second

user.approved_musician_skills << MusicianSkill.last
