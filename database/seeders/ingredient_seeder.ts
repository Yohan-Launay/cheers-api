import Ingredient from '#models/ingredient'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Ingredient.createMany([
      {
        name: 'Vodka',
        description: 'A clear distilled alcoholic beverage',
        imgPath: 'vodka.jpg',
        unit: 'cl',
        volume: 4
      },
      {
        name: 'Gin',
        description: 'A clear distilled alcoholic beverage',
        imgPath: 'gin.jpg',
        unit: 'cl',
        volume: 4
      },
      {
        name: 'Rum',
        description: 'A clear distilled alcoholic beverage',
        imgPath: 'rum.jpg',
        unit: 'cl',
        volume: 4
      }
    ])
  }
}