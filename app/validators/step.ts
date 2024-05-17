import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new step.
 */
export const createStepValidator = vine.compile(
  vine.object({
    cocktailId: vine.number(),
    description: vine.string(),
    order: vine.number()
  })
)

/**
 * Validator to validate the payload when updating
 * an existing step.
 */
export const updateStepValidator = vine.compile(
  vine.object({
    description: vine.string(),
    order: vine.number()
  })
)