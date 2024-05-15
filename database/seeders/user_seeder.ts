import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'flana',
        email: 'yohandeveloppe@gmail.com',
        password: 'Pa$$w0rd',
        imgPath: 'https://via.placeholder.com/150',
        dateOfBirth: new Date('1996-04-26'),
      },
      {
        username: 'lucie',
        email: 'lucie@gmail.com',
        password: 'Pa$$w0rd',
        imgPath: 'https://via.placeholder.com/150',
        dateOfBirth: new Date('1996-11-28'),
      },
    ])
  }
}