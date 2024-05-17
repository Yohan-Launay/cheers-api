import Ingredient from '#models/ingredient'
import type { HttpContext } from '@adonisjs/core/http'
import { createIngredientValidator, updateIngredientValidator } from '#validators/ingredient'

export default class IngredientsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Ingredient.query().preload('cocktails')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createIngredientValidator.validate(data)
    await Ingredient.create(payload)

    return response.status(201).json({message: "Ingredient créée !"})
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Ingredient.query().preload('cocktails').where('id', params.id).firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const ingredient = await Ingredient.findOrFail(params.id)
    const payload = await request.validateUsing(updateIngredientValidator)
    await ingredient.merge(payload).save()

    return response.status(201).json({message: "Ingredient modifiée !"})
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const ingredient = await Ingredient.findOrFail(params.id)
    await ingredient.delete()

    return response.status(200).json({message: "Ingredient supprimée !"})
  }
}