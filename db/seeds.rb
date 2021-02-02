# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Users = User.create([
  { username: 'Isaac', email: 'isaac@isaac.isaac', password: '123456' },
  { username: 'DemoLogin', email: 'demouser@demo.disarray', password: '123456' },
  { username: 'Captain America', email: 'firstavenger@avengers.io', password: '123456' },
  { username: 'Iron Man', email: 'tstark@starkindustries.io', password: '123456' },
  { username: 'Hulk', email: 'bbanner@avengers.io', password: '123456' },
  { username: 'Black Widow', email: 'blackwidow@avengers.io', password: '123456' },
])

isaac = Users[0]
demologin = Users[1]
captain_america = Users[2]
tony_stark = Users[3]
bruce_banner = Users[4]
natasha = Users[5]

Server.destroy_all
Servers = Server.create([
  { name: 'Avengers', owner_id: tony_stark, invite_code: 'ISA662' },
  { name: 'Stark Industries', owner_id: tony_stark, invite_code: 'PUBLIC22' },
])

ServerMembership.destroy_all
ServerMembership = ServerMembership.create([
  # avengers server
  { member_id: isaac.id, server_id: Server.first.id },
  { member_id: demologin.id, server_id: Server.first.id },
  { member_id: captain_america.id, server_id: Server.first.id },
  { member_id: tony_stark.id, server_id: Server.first.id },
  { member_id: bruce_banner.id, server_id: Server.first.id },
  { member_id: natasha.id, server_id: Server.first.id },

  # stark industries server
  { member_id: tony_stark.id, server_id: Server.second.id },
  { member_id: isaac.id, server_id: Server.second.id },
  { member_id: demologin.id, server_id: Server.second.id },
])

ChannelMessage.destroy_all
ChannelMessage = ChannelMessage.create([
  # Stark Industries General Channel Messages
  { author_id: tony_stark.id, body: 'The truth is...I am Iron Man.', channel_id: Channel.second.id, created_at: Time.zone.parse('2011-02-03 15:30:45')},
  { author_id: demologin.id, body: 'What?!', channel_id: Channel.second.id, created_at: Time.zone.parse('2011-02-03 15:30:48')},
  { author_id: isaac.id, body: 'Yep. Almost all the reporters went crazy.', channel_id: Channel.second.id, created_at: Time.zone.parse('2011-02-03 15:30:49')},
  { author_id: tony_stark.id, body: "It's not about me. It's not about you. It's not even about us. It's about legacy. It's about what we choose to leave behind.", channel_id: Channel.second.id, created_at: Time.zone.parse('2014-01-02 18:30:45')},

  # Avengers General Channel Messages
  { author_id: tony_stark.id, body: "We're the avengers. We can bust arms dealers all the livelong day, but that up there, that's...the end game. How were you guys planning on beating them?", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:33')},
  { author_id: captain_america.id, body: "Together.", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:34')},
  { author_id: tony_stark, body: "We'll lose.", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:35')},
  { author_id: captain_america.id, body: "Then we'll do that together too.", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:36')},

  # Direct Messages
  # { author_id: captain_america.id, body: "", channel_id: Channel.first.id, created_at: Time.zone.parse('2012-05-04 09:30:36')},

])