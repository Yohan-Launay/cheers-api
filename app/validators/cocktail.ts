import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new cocktail.
 */
export const createCocktailValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    imgPath: vine.string(),
    status: vine.boolean(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing cocktail.
 */
export const updateCocktailValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    imgPath: vine.string(),
    status: vine.boolean(),
  })
)