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
    const { username, email, password, imgPath, dateOfBirth } = await request.validateUsing(createUserValidator)

    await User.create({
      username,
      email,
      password,
      imgPath,
      dateOfBirth,
    }) 

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
    const { username, email, password, imgPath, dateOfBirth } = await request.validateUsing(updateUserValidator)

    await user.merge({
      username,
      email,
      password,
      imgPath,
      dateOfBirth,
    }).save()

    return response.status(201).json({message: "Utilisateur modifié !"})
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()

    return response.status(201).json({message: "Utilisateur supprimé !"})
  }
}