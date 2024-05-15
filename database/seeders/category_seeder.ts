import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      {
        name: 'Alcoholic',
        description: 'A cocktail that contains alcohol',
      },
      {
        name: 'Non-alcoholic',
        description: 'A cocktail that does not contain alcohol',
      },
      {
        name: 'Hot',
        description: 'A cocktail that is served hot',
      }
    ])
  }
}