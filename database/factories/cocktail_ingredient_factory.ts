import factory from '@adonisjs/lucid/factories'
import CocktailIngredient from '#models/cocktail_ingredient'

export const CocktailIngredientFactory = factory
  .define(CocktailIngredient, async ({ faker }) => {
    return {
      cocktailId: faker.number.int({ min: 1, max: 10 }),
      ingredientId: faker.number.int({ min: 1, max: 10 }),
      unit: faker.lorem.words(1),
      quantity: faker.number.int({ min: 1, max: 10 }),
    }
  })
  .build()