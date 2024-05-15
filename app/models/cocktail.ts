import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import Review from './review.js'
import Ingredient from './ingredient.js'
import Utensil from './utensil.js'
import Category from './category.js'

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
  declare status: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>

  @manyToMany(() => Ingredient)
  declare ingredients: ManyToMany<typeof Ingredient>

  @manyToMany(() => Utensil)
  declare utensils: ManyToMany<typeof Utensil>

  @manyToMany(() => Category)
  declare categories: ManyToMany<typeof Category>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}