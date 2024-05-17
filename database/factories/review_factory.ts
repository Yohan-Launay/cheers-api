import factory from '@adonisjs/lucid/factories'
import Review from '#models/review'

export const ReviewFactory = factory
  .define(Review, async ({ faker }) => {
    return {
      cocktailId: faker.number.int({ min: 1, max: 10 }),
      userId: faker.number.int({ min: 1, max: 2 }),
      title: faker.lorem.words(1),
      rating: faker.number.int({ min: 1, max: 5 }),
      comment: faker.lorem.sentence(),
    }
  })
  .build()