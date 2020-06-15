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
  { username: 'isaac', email: 'isaac@isaac.isaac', password: '123456' },
  { username: 'Captain America', email: 'firstavenger@avengers.io', password: '123456' },
  { username: 'Iron Man', email: 'tstark@starkindustries.io', password: '123456' },
  { username: 'Hulk', email: 'bbanner@avengers.io', password: '123456' },
  { username: 'Black Widow', email: 'blackwidow@avengers.io', password: '123456' },
])

# Server.destroy_all
# Servers = Server.create([
#   {},
# ])

# ServerMembership.destroy_all
# ServerMembership = ServerMembership.create([
#   {},
# ])

# ChannelMessage.destroy_all
# ChannelMessage = ChannelMessage.create([
#   {},
# ])