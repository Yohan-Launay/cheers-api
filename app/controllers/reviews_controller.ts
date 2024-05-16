import Review from '#models/review'
import type { HttpContext } from '@adonisjs/core/http'
import { createReviewValidator } from '#validators/review'

export default class ReviewsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Review.query().preload('cocktail')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createReviewValidator.validate(data)
    await Review.create(payload)

    return response.status(201).json({message: "Review created !"})
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Review.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const review = await Review.findOrFail(params.id)
    const payload = await request.validateUsing(createReviewValidator)
    await review.merge(payload).save()

    return response.status(201).json({message: "Review updated !"})
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const review = await Review.findOrFail(params.id)
    await review.delete()

    return {message: "Review deleted !"}
  }
}