import type { HttpContext } from '@adonisjs/core/http'
import Cocktail from '#models/cocktail'
import { createCocktailValidator } from '#validators/cocktail'

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
    .preload('cocktailIngredients')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createCocktailValidator.validate(data)
    await Cocktail.create(payload)

    return response.status(201).json({message: "Cocktail créé !"})
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Cocktail
    .query()
    .preload('user')
    .preload('reviews')
    .preload('categories')
    .preload('utensils')
    .preload('ingredients')
    .where('id', params.id)
    .firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const cocktail = await Cocktail.findOrFail(params.id)
    const payload = await request.validateUsing(createCocktailValidator)
    await cocktail.merge(payload).save()

    return response.status(201).json({message: "Cocktail modifié !"})
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const cocktail = await Cocktail.findOrFail(params.id)
    await cocktail.related('reviews').query().delete()
    await cocktail.delete()

    return {message: "Cocktail supprimé !"}
  }
}