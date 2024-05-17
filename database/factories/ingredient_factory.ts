import factory from '@adonisjs/lucid/factories'
import Ingredient from '#models/ingredient'

export const IngredientFactory = factory
  .define(Ingredient, async ({ faker }) => {
    return {
      name: faker.lorem.words(1),
      description: faker.lorem.sentence(),
      imgPath: faker.lorem.words(1) + '.jpg',
      unit: faker.lorem.words(1),
      volume: faker.number.int({ min: 1, max: 10 }),
    }
  }).relation('cocktails', () => 'CocktailFactory')
  .build()