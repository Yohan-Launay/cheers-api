import { DateTime } from 'luxon'
import type { ManyToMany , HasMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, manyToMany, hasMany } from '@adonisjs/lucid/orm'
import Cocktail from './cocktail.js'
import CocktailIngredient from './cocktail_ingredient.js'

export default class Ingredient extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare imgPath: string

  @hasMany(() => CocktailIngredient)
  declare cocktailIngredients: HasMany<typeof CocktailIngredient>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}