import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { column, BaseModel, belongsTo } from '@adonisjs/lucid/orm'
import Cocktail from './cocktail.js'

export default class Step extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cocktailId: number

  @column()
  declare order: number

  @column()
  declare description: string

  @belongsTo(() => Cocktail)
  declare cocktail: BelongsTo<typeof Cocktail>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}