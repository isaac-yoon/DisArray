# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.create!([
  { username: 'Isaac', email: 'isaac@isaac.isaac', password: '123456' },
  { username: 'DemoLogin', email: 'demouser@demo.disarray', password: '123456' },
  { username: 'Captain America', email: 'firstavenger@avengers.io', password: '123456' },
  { username: 'Iron Man', email: 'tstark@starkindustries.io', password: '123456' },
  { username: 'Hulk', email: 'bbanner@avengers.io', password: '123456' },
  { username: 'Black Widow', email: 'blackwidow@avengers.io', password: '123456' },
])

Server.destroy_all
Server.create!([
  { name: 'Avengers', owner_id: User.all[3].id, invite_code: 'ISA662' },
  { name: 'Stark Industries', owner_id: User.all[3].id, invite_code: 'PUBLIC22' },
])

# channels are created manually, check servers controller folder

ServerMembership.destroy_all
ServerMembership.create!([
  # avengers server
  { member_id: User.all[0].id, server_id: Server.first.id },
  { member_id: User.all[1].id, server_id: Server.first.id },
  { member_id: User.all[2].id, server_id: Server.first.id },
  { member_id: User.all[3].id, server_id: Server.first.id },
  { member_id: User.all[4].id, server_id: Server.first.id },
  { member_id: User.all[5].id, server_id: Server.first.id },

  # stark industries server
  { member_id: User.all[3].id, server_id: Server.second.id },
  { member_id: User.all[0].id, server_id: Server.second.id },
  { member_id: User.all[1].id, server_id: Server.second.id },
])

ChannelMessage.destroy_all
ChannelMessage.create!([
  # Stark Industries General Channel Messages
  { author_id: User.all[3].id, body: 'The truth is...I am Iron Man.', channel_id: Channel.second.id, created_at: Time.zone.parse('2011-02-03 15:30:45')},
  { author_id: User.all[1].id, body: 'What?!', channel_id: Channel.second.id, created_at: Time.zone.parse('2011-02-03 15:30:48')},
  { author_id: User.all[0].id, body: 'Yep. Almost all the reporters went crazy.', channel_id: Channel.second.id, created_at: Time.zone.parse('2011-02-03 15:30:49')},
  { author_id: User.all[3].id, body: "It's not about me. It's not about you. It's not even about us. It's about legacy. It's about what we choose to leave behind.", channel_id: Channel.second.id, created_at: Time.zone.parse('2014-01-02 18:30:45')},

  # Avengers General Channel Messages
  { author_id: User.all[3].id, body: "We're the avengers. We can bust arms dealers all the livelong day, but that up there, that's...the end game. How were you guys planning on beating them?", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:33')},
  { author_id: User.all[2].id, body: "Together.", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:34')},
  { author_id: User.all[3].id, body: "We'll lose.", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:35')},
  { author_id: User.all[2].id, body: "Then we'll do that together too.", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:36')},
  { author_id: User.all[5].id, body: "See you a minute. :)", channel_id: Channel.first.id, created_at: Time.zone.parse('2019-05-04 12:30:36')},

  # Direct Messages
  # { author_id: captain_america.id, body: "Tony, I'm glad you're back at the compound. I don't like the idea of you rattling around a mansion by yourself. We all need family. The Avengers are yours, maybe more so than mine. I've been on my own since I was 18. I never really fit in anywhere, even in the army. My faith's in people, I guess. Individuals. And I'm happy to say that, for the most part, they haven't let me down. Which is why I can't let them down either. Locks can be replaced, but maybe they shouldn't. I know I hurt you, Tony. I guess I thought by not telling you about your parents I was sparing you, but I can see now that I was really sparing myself, and I'm sorry. Hopefully one day you can understand. I wish we agreed on the Accords, I really do.I know you're doing what you believe in, and that's all any of us can do. That's all any of us should do. So, no matter what. I promise you, if you need us, if you need me, I'll be there.", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:36')},
])