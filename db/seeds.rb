User.create(nickname: 'MomLover', first_name: 'Peta', second_name: 'Fufel', type: 'User', email: 'agaaa@mail.ru', password: '12345')
User.create(nickname: '__xxx_Killer_xxx__', first_name: 'Kola', second_name: 'Ivanv', type: 'User', email: 'reeo@mail.ru', password: 'qwerty123456')

Organization.create(name: 'United Russia', description: 'True lover of motherland')

MusicianSkill.create(name: 'Vocals')

Genre.create(name: 'neo-psychedelia', description: 'Neo-psychedelia is a diverse genre of psychedelic music that originated in the 1970s as an outgrowth of the British post-punk scene, also called acid punk.')

Place.create(name: 'Hell', latitude: '666', longitude: '666', address: 'Kazintsa street 60, Minsk', description: 'Muaxaxaaxxa', rules: 'no socks with sandals')

Event.create(place_id: "#{Place.all.first.id}", name: 'New Year', description: 'Happy ', start_time: '2000-12-31', end_time: '2000-12-31')

Image.create(imageable_id: '228', imageable_type: 'User', url: 'okeey')

User.all.first.image

User.all.first.genres
User.all.first.genres.create(name: 'neo-psychedelia')

User.all.first.musician_skills
User.all.first.musician_skills.create(name: 'Vocals')

User.all.first.organizations.create(name: 'United Russia')

Organization.all.first.events

Organization.all.last.users
