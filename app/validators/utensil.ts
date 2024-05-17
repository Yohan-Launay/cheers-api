import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new category.
 */
export const createUtensilValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    imgPath: vine.string(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing category.
 */
export const updateUtensilValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    imgPath: vine.string(),
  })
)