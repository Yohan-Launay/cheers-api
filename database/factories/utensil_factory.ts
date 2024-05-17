import factory from '@adonisjs/lucid/factories'
import Utensil from '#models/utensil'

export const UtensilFactory = factory
  .define(Utensil, async ({ faker }) => {
    return {
      name: faker.lorem.words(1),
      description: faker.lorem.sentence(),
      imgPath: faker.lorem.words(1) + '.jpg',
    }
  })
  .build()