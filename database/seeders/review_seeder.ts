import Review from '#models/review'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Review.createMany([
      {
        cocktailId: 1,
        userId: 1,
        rating: 5,
        title: 'This is a great cocktail!',
        comment: 'This is a great cocktail!',
      },
      {
        cocktailId: 1,
        userId: 2,
        rating: 4,
        title: 'This is a good cocktail!',
        comment: 'This is a good cocktail!',
      },
      {
        cocktailId: 2,
        userId: 1,
        rating: 3,
        title: 'This is a decent cocktail!',
        comment: 'This is a decent cocktail!',
      },
      {
        cocktailId: 2,
        userId: 2,
        rating: 2,
        title: 'This is a bad cocktail!',
        comment: 'This is a bad cocktail!',
      }
    ])
  }
}