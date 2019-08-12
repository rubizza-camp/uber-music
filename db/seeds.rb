user =User.create(
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

user.organizations << Organization.all.first

kamenka = Place.create(
	name: Faker::TvShows::FamilyGuy.location, 
	latitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
	longitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
	address: Faker::Address.street_address, 
	description: Faker::JapaneseMedia::SwordArtOnline.item, 
	rules: Faker::Books::Lovecraft.fhtagn
	)

urucha = Place.create(
	name: Faker::TvShows::FamilyGuy.location, 
	latitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
	longitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
	address: Faker::Address.street_address, 
	description: Faker::JapaneseMedia::SwordArtOnline.item, 
	rules: Faker::Books::Lovecraft.fhtagn
	)

nemiga = Place.create(
	name: Faker::TvShows::FamilyGuy.location, 
	latitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
	longitude: Faker::Number.normal(mean: 50, standard_deviation: 3.5), 
	address: Faker::Address.street_address, 
	description: Faker::JapaneseMedia::SwordArtOnline.item, 
	rules: Faker::Books::Lovecraft.fhtagn
	)

new_year = Event.create(
	place_id: "#{kamenka.id}", 
	name: Faker::FunnyName.name, 
	description: Faker::JapaneseMedia::SwordArtOnline.item, 
	start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default), 
	end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
	)

hallowin = Event.create(
	place_id: "#{urucha.id}", 
	name: Faker::FunnyName.name, 
	description: Faker::JapaneseMedia::SwordArtOnline.item, 
	start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default), 
	end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
	)

birthday = Event.create(
	place_id: "#{nemiga.id}", 
	name: Faker::FunnyName.name, 
	description: Faker::JapaneseMedia::SwordArtOnline.item, 
	start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default), 
	end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
	)

organization.pending_events << new_year

organization.disabled_events << hallowin

organization.approved_events << birthday

first_random_skill = MusicianSkill.create(name: Faker::Music.instrument)

second_random_skill = MusicianSkill.create(name: Faker::Music.instrument)

thrid_random_skill = MusicianSkill.create(name: Faker::Music.instrument)

user.pending_musician_skills << first_random_skill

user.disabled_musician_skills << second_random_skill

user.approved_musician_skills << thrid_random_skill
