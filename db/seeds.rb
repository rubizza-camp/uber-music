10.times do
  User.create(
    nickname: Faker::TvShows::FamilyGuy.character,
    first_name: Faker::Name.first_name, 
    second_name: Faker::Name.last_name, 
    type: 'User', 
    email: Faker::Internet.email, 
    password: Faker::Internet.password
    )
end

10.times do
  Genre.create(
    name: Faker::Music.genre, 
    description: Faker::ChuckNorris.fact
    )
end

(0..9).each do |x|
  User.all[x].genres << Genre.all[x]
end

(0..9).to_a.shuffle.each_with_index do |x,y|
  User.all[y].genres << Genre.all[x]
end

(0..9).to_a.shuffle.each_with_index do |x,y|
  User.all[y].genres << Genre.all[x]
end


10.times do 
  Organization.create(
    name: Faker::Music.band,
    description: Faker::ChuckNorris.fact
    )
end

(1..9).each do |x|
  User.first.organizations << Organization.all[x]
end

(5..9).each do |x|
  User.all[x].organizations << Organization.all[x]
  User.all[x].organizations << Organization.second
end

(1..4).each do |x|
  User.all[x].organizations << Organization.third
  User.all[x].organizations << Organization.second
  User.all[x].organizations << Organization.first
end


5.times do  
  Place.create(
    name: Faker::TvShows::FamilyGuy.location, 
    latitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
    longitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
    address: Faker::Address.street_address, 
    description: Faker::ChuckNorris.fact, 
    rules: Faker::Books::Lovecraft.fhtagn
    )
end


(0..4).each do |x|
  Event.create(
    place_id: "#{Place.ids[x]}", 
    name: Faker::FunnyName.name, 
    description: Faker::ChuckNorris.fact, 
    start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default), 
    end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
    )
end

(0..1).each do |x|
  Event.create(
    place_id: "#{Place.ids[x]}", 
    name: Faker::FunnyName.name, 
    description: Faker::ChuckNorris.fact, 
    start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default), 
    end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
  )
end

(1..3).each do |x|
  Event.create(
    place_id: "#{Place.ids[x]}", 
    name: Faker::FunnyName.name, 
    description: Faker::ChuckNorris.fact, 
    start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default), 
    end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
  )
end


(0..9).to_a.shuffle.each_with_index do |x,y|
  Organization.all[y].pending_events << Event.all[x]
end

(0..9).to_a.shuffle.each_with_index do |x,y|
  Organization.all[y].approved_events << Event.all[x]
end

10.times do
  MusicianSkill.create(name: Faker::Music.instrument)
end


(0..9).to_a.shuffle.each_with_index do |x,y|
  User.all[y].approved_musician_skills << MusicianSkill.all[x]
end

(0..9).to_a.shuffle.each_with_index do |x,y|
  User.all[y].approved_musician_skills << MusicianSkill.all[x]
end

(0..9).each do |x|
  Image.create(imageable_id: User.ids[x], imageable_type: "User", url: File.open("public/seeds_image/#{x}.jpg"))
end

(0..9).each do |x|
  Image.create(imageable_id: Event.ids[x], imageable_type: "Event", url: File.open("public/seeds_image/#{x + 10}.jpg"))
  Image.create(imageable_id: Event.ids[x], imageable_type: "Event", url: File.open("public/seeds_image/#{x + 20}.jpg"))
end

(0..9).each do |x|
  Image.create(imageable_id: Organization.ids[x], imageable_type: "Organization", url: File.open("public/seeds_image/grups/0#{x}.jpg"))
  Image.create(imageable_id: Organization.ids[x], imageable_type: "Organization", url: File.open("public/seeds_image/#{(0..29).to_a.shuffle.first}.jpg"))
  Image.create(imageable_id: Organization.ids[x], imageable_type: "Organization", url: File.open("public/seeds_image/#{(0..29).to_a.shuffle.first}.jpg"))
  Image.create(imageable_id: Organization.ids[x], imageable_type: "Organization", url: File.open("public/seeds_image/#{(0..29).to_a.shuffle.first}.jpg"))
  Image.create(imageable_id: Organization.ids[x], imageable_type: "Organization", url: File.open("public/seeds_image/#{(0..29).to_a.shuffle.first}.jpg"))
end

(0..4).each do |x|
  Image.create(imageable_id: Place.ids[x], imageable_type: "Place", url: File.open("public/seeds_image/#{(0..29).to_a.shuffle.first}.jpg"))
  Image.create(imageable_id: Place.ids[x], imageable_type: "Place", url: File.open("public/seeds_image/#{(0..29).to_a.shuffle.first}.jpg"))
  Image.create(imageable_id: Place.ids[x], imageable_type: "Place", url: File.open("public/seeds_image/#{(0..29).to_a.shuffle.first}.jpg"))
end
