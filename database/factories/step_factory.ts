import factory from '@adonisjs/lucid/factories'
import Step from '#models/step'

export const StepFactory = factory
  .define(Step, async ({ faker }) => {
    return {
      cocktailId: faker.number.int({ min: 1, max: 10 }),
      description: faker.lorem.sentence(),
      order: faker.number.int({ min: 1, max: 10 })
    }
  })
  .build()