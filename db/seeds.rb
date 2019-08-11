User.create(nickname: 'Petya_Super', first_name: 'Petya', second_name: 'Ivanov', type: 'User', email: 'petya2006@mail.ru', password: '123123')

Genre.create(name: 'Metall', description: 'Some rock style')

User.all.first.genres << Genre.all.first

Organization.create(name: 'Moon wolfs', description: 'Hard rock organization')

User.all.first.organizations << Organization.all.first

