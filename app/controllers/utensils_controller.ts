import Utensil from '#models/utensil'
import type { HttpContext } from '@adonisjs/core/http'
import { createUtensilValidator, updateUtensilValidator } from '#validators/utensil'

export default class UtensilsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Utensil.query().preload('cocktails')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createUtensilValidator.validate(data)
    await Utensil.create(payload)

    return response.status(201).json({message: "Utensil créée !"})
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Utensil.query().preload('cocktails').where('id', params.id).firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const utensil = await Utensil.findOrFail(params.id)
    const payload = await request.validateUsing(updateUtensilValidator)
    await utensil.merge(payload).save()

    return response.status(201).json({message: "Utensil modifiée !"})
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const utensil = await Utensil.findOrFail(params.id)
    await utensil.delete()

    return response.status(200).json({message: "Utensil supprimée !"})
  }
}