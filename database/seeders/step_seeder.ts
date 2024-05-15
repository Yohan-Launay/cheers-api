import Step from '#models/step'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Step.createMany([
      {
        cocktailId: 1,
        order: 1,
        description: 'Add ice to shaker',
      },
      {
        cocktailId: 1,
        order: 2,
        description: 'Add ingredients to shaker',
      },
      {
        cocktailId: 1,
        order: 3,
        description: 'Shake',
      },
      {
        cocktailId: 1,
        order: 4,
        description: 'Strain into glass',
      },
      {
        cocktailId: 2,
        order: 1,
        description: 'Add ice to glass',
      },
      {
        cocktailId: 2,
        order: 2,
        description: 'Add ingredients to glass',
      },
      {
        cocktailId: 2,
        order: 3,
        description: 'Stir',
      },
      {
        cocktailId: 2,
        order: 4,
        description: 'Garnish',
      }
    ])
  }
}