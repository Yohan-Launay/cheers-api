import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reviews'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cocktail_id').unsigned().references('cocktails.id')
      table.integer('user_id').unsigned().references('users.id')
      table.integer('rating').notNullable()
      table.text('title').notNullable()
      table.text('content').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}