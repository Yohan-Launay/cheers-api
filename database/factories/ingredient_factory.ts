import factory from '@adonisjs/lucid/factories'
import Ingredient from '#models/ingredient'

export const IngredientFactory = factory
  .define(Ingredient, async ({ faker }) => {
    return {
      name: faker.lorem.words(1),
      description: faker.lorem.sentence(),
      imgPath: faker.lorem.words(1) + '.jpg',
    }
  })
  .build()