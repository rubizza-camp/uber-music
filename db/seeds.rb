user =User.create(nickname: 'Petya_Super', first_name: 'Petya', second_name: 'Ivanov', type: 'User', email: 'petya2006@mail.ru', password: '123123')

Genre.create(name: 'Metall', description: 'Some rock style')

user.genres << Genre.first

organization = Organization.create(name: 'Moon wolfs', description: 'Hard rock organization')

user.organizations << Organization.all.first

kamenka = Place.create(name: 'Kamenka', latitude: '1488', longitude: '228', address: 'Pushkina street', description: 'Happy place', rules: 'No latinas')

urucha = Place.create(name: 'Urucha', latitude: '8800', longitude: '555', address: 'Tolstova street', description: 'Not happy place', rules: 'No latinas and afro')

nemiga = Place.create(name: 'Nemiga', latitude: '3535', longitude: '328', address: 'Mishkina street', description: 'Horable place', rules: 'No afro')

new_year = Event.create(place_id: "#{kamenka.id}", name: 'New Year', description: 'Happy Event', start_time: 'Sun, 03 Mar 2019 14:17:01 +0000', end_time: 'Sun, 03 Mar 2019 14:17:01 +0000')

hallowin = Event.create(place_id: "#{urucha.id}", name: 'Hallowin', description: 'Event with goast', start_time: 'Sun, 20 Mar 2019 14:17:01 +0000', end_time: 'Sun, 30 Mar 2019 14:17:01 +0000')

birthday = Event.create(place_id: "#{nemiga.id}", name: 'Birthday', description: 'Event with cake', start_time: 'Sun, 10 Mar 2019 14:17:01 +0000', end_time: 'Sun, 11 Mar 2019 14:17:01 +0000')

organization.pending_events << new_year

organization.disabled_events << hallowin

organization.approved_events << birthday

bass_skill = MusicianSkill.create(name: 'Bass')

drum_skill = MusicianSkill.create(name: 'Drum')

fleute_skill = MusicianSkill.create(name: 'Fleute')

user.pending_musician_skills << bass_skill

user.disabled_musician_skills << drum_skill

user.approved_musician_skills << fleute_skill
