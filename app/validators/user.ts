import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new cocktail.
 */
export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
    imgPath: vine.string().optional(),
    dateOfBirth: vine.date(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing cocktail.
 */
export const updateUserValidator = vine.compile(
  vine.object({
    username: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8).maxLength(32),
    imgPath: vine.string().optional(),
    dateOfBirth: vine.date(),
  })
)