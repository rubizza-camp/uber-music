User.create(nickname: 'Petya_Super', first_name: 'Petya', second_name: 'Ivanov', type: 'User', email: 'petya2006@mail.ru', password: '123123')

Genre.create(name: 'Metall', description: 'Some rock style')

User.all.first.genres << Genre.all.first

Organization.create(name: 'Moon wolfs', description: 'Hard rock organization')

User.all.first.organizations << Organization.all.first

Place.create(name: 'Kamenka', latitude: '1488', longitude: '228', address: 'Pushkina street', description: 'Happy place', rules: 'No latinas')

Place.create(name: 'Urucha', latitude: '8800', longitude: '555', address: 'Tolstova street', description: 'Not happy place', rules: 'No latinas and afro')

Place.create(name: 'Nemiga', latitude: '3535', longitude: '328', address: 'Mishkina street', description: 'Horable place', rules: 'No afro')

Event.create(place_id: "#{Place.all.first.id}", name: 'New Year', description: 'Happy Event', start_time: 'Sun, 03 Mar 2019 14:17:01 +0000', end_time: 'Sun, 03 Mar 2019 14:17:01 +0000')

Event.create(place_id: "#{Place.all.second.id}", name: 'Hallowin', description: 'Event with goast', start_time: 'Sun, 20 Mar 2019 14:17:01 +0000', end_time: 'Sun, 30 Mar 2019 14:17:01 +0000')

Event.create(place_id: "#{Place.all.last.id}", name: 'Birthday', description: 'Event with cake', start_time: 'Sun, 10 Mar 2019 14:17:01 +0000', end_time: 'Sun, 11 Mar 2019 14:17:01 +0000')

Organization.all.first.pending_events << Event.all.first

Organization.all.first.disabled_events << Event.all.second

Organization.all.first.approved_events << Event.all.last

MusicianSkill.create(name: 'Bass')

MusicianSkill.create(name: 'Dram')

MusicianSkill.create(name: 'Fleute')

User.all.first.pending_musician_skills << MusicianSkill.all.first

User.all.first.disabled_musician_skills << MusicianSkill.all.second

User.all.first.approved_musician_skills << MusicianSkill.all.last
