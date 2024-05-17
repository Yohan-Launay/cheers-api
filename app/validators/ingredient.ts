import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new category.
 */
export const createIngredientValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    imgPath: vine.string(),
    unit: vine.string(),
    volume: vine.number(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing category.
 */
export const updateIngredientValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    imgPath: vine.string(),
    unit: vine.string(),
    volume: vine.number(),
  })
)