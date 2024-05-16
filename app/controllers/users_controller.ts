import User from '#models/user'
import { createUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'


export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return User.query().preload('cocktails')
  }
  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createUserValidator.validate(data)
    await User.create(payload)

    return response.status(201).json({message: "Utilisateur créé !"})    
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return User.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const payload = await request.validateUsing(updateUserValidator)
    await user.merge(payload).save()

    return response.status(201).json({message: "Utilisateur modifié !"})
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.related('reviews').query().delete()
    await user.related('cocktails').query().delete()
    await user.delete()

    return response.status(201).json({message: "Utilisateur supprimé !"})
  }
}