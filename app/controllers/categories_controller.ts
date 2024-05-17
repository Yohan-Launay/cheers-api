import Category from '#models/category'
import type { HttpContext } from '@adonisjs/core/http'
import { createCategoryValidator, updateCategoryValidator } from '#validators/category'

export default class CategorysController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Category.query().preload('cocktails')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createCategoryValidator.validate(data)
    await Category.create(payload)

    return response.status(201).json({message: "Categorie créée !"})
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Category.query().preload('cocktails').where('id', params.id).firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    const payload = await request.validateUsing(updateCategoryValidator)
    await category.merge(payload).save()

    return response.status(201).json({message: "Categorie modifiée !"})
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const category = await Category.findOrFail(params.id)
    await category.delete()

    return response.status(200).json({message: "Categorie supprimée !"})
  }
}