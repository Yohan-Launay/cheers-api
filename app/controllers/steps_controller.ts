import Step from '#models/step'
import type { HttpContext } from '@adonisjs/core/http'
import { createStepValidator, updateStepValidator } from '#validators/step'

export default class StepsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Step.query().preload('cocktail')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createStepValidator.validate(data)
    await Step.create(payload)

    return response.status(201).json({message: "Étape créée !"})
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Step.query().preload('cocktail').where('id', params.id).firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const step = await Step.findOrFail(params.id)
    const payload = await request.validateUsing(updateStepValidator)
    await step.merge(payload).save()

    return response.status(201).json({message: "Étape modifiée !"})
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const step = await Step.findOrFail(params.id)
    await step.delete()

    return response.status(200).json({message: "Étape supprimée !"})
  }
}