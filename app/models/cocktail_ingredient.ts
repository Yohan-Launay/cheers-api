import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Ingredient from './ingredient.js'
import Cocktail from './cocktail.js'

export default class CocktailIngredient extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare ingredientId: number

  @column()
  declare cocktailId: number

  @column()
  declare quantity: number

  @column()
  declare unit: string

  @belongsTo(() => Ingredient)
  declare ingredient: BelongsTo<typeof Ingredient>

  @belongsTo(() => Cocktail)
  declare cocktail: BelongsTo<typeof Cocktail>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}