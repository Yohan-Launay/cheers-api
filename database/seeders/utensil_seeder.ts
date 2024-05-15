import Utensil from '#models/utensil'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Utensil.createMany([
      {
        name: 'Shaker',
        description: 'A device',
        imgPath: 'shaker.jpg',
      },
      {
        name: 'Strainer',
        description: 'A device',
        imgPath: 'strainer.jpg',
      },
      {
        name: 'Muddler',
        description: 'A device',
        imgPath: 'muddler.jpg',
      }
    ])
  }
}