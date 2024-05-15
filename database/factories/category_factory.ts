import factory from '@adonisjs/lucid/factories'
import Category from '#models/category'

export const CategoryFactory = factory
  .define(Category, async ({ faker }) => {
    return {
      name: faker.lorem.words(1),
      description: faker.lorem.sentence(),
    }
  })
  .build()