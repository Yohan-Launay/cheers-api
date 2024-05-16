import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new cocktail.
 */
export const createReviewValidator = vine.compile(
  vine.object({
    cocktailId: vine.number(),
    userId: vine.number(),
    rating: vine.number().max(5),
    title: vine.string().maxLength(50),
    comment: vine.string().maxLength(255),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing cocktail.
 */
export const updateReviewValidator = vine.compile(
  vine.object({
    cocktailId: vine.number(),
    userId: vine.number(),
    rating: vine.number().max(5),
    title: vine.string().maxLength(50),
    comment: vine.string().maxLength(255),
  })
)