import factory from '@adonisjs/lucid/factories'
import Cocktail from '#models/cocktail'
import { CategoryFactory } from './category_factory.js'

export const CocktailFactory = factory
  .define(Cocktail, async ({ faker }) => {
    return {
      userId: 1,
      name: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      imgPath: faker.image.url(),
      status: true,
    }
  }).relation('categories', () => CategoryFactory)
  .build()