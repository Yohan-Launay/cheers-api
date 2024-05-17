import { DateTime } from 'luxon'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, manyToMany } from '@adonisjs/lucid/orm'
import Cocktail from './cocktail.js'

export default class Ingredient extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare imgPath: string

  @column()
  declare unit: string

  @column()
  declare volume: number

  @manyToMany(() => Cocktail)
  declare cocktails: ManyToMany<typeof Cocktail>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}