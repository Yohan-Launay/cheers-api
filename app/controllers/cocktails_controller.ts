import type { HttpContext } from '@adonisjs/core/http'
import Cocktail from '#models/cocktail'

export default class CocktailsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Cocktail
    .query()
    .preload('user')
    .preload('reviews')
    .preload('categories')
    .preload('utensils')
    .preload('ingredients')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}