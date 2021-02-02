# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Users = User.create([
  { username: 'DemoLogin', email: 'demouser@demo.disarray', password: '123456' },
  { username: 'Isaac', email: 'isaac@isaac.isaac', password: '123456' },
  { username: 'Captain America', email: 'firstavenger@avengers.io', password: '123456' },
  { username: 'Iron Man', email: 'tstark@starkindustries.io', password: '123456' },
  { username: 'Hulk', email: 'bbanner@avengers.io', password: '123456' },
  { username: 'Black Widow', email: 'blackwidow@avengers.io', password: '123456' },
])

Server.destroy_all
Servers = Server.create([
  { name: Avengers, owner_id: User.second.id,invite_code: 'ISA662' },
])

Channel.destroy_all
Channels = Channel.create([
  { name: General, server_id: Server[0].id }
])

ServerMembership.destroy_all
ServerMembership = ServerMembership.create([
  { member_id: User[0].id, server_id: Server.first.id },
  { member_id: User[1].id, server_id: Server.first.id },
  { member_id: User[2].id, server_id: Server.first.id },
  { member_id: User[3].id, server_id: Server.first.id },
  { member_id: User[4].id, server_id: Server.first.id },
  { member_id: User[5].id, server_id: Server.first.id },
])

ChannelMessage.destroy_all
ChannelMessage = ChannelMessage.create([
  { author_id: User[0].id, body: 'test', channel_id: Channel[0].id, created_at: '2011-02-02 00:00:00'},
])