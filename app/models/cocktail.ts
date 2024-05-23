import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import Review from './review.js'
import Utensil from './utensil.js'
import Category from './category.js'
import CocktailIngredient from './cocktail_ingredient.js'

export default class Cocktail extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare imgPath: string

  @column()
  declare status: boolean

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>

  @hasMany(() => CocktailIngredient)
  declare cocktailIngredients: HasMany<typeof CocktailIngredient>

  @manyToMany(() => Utensil, {
    pivotTimestamps: true
  })
  declare utensils: ManyToMany<typeof Utensil>

  @manyToMany(() => Category, {
    pivotTimestamps: true
  })
  declare categories: ManyToMany<typeof Category>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}