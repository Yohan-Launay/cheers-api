import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cocktail_ingredients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
      table.integer('cocktail_id').unsigned().references('id').inTable('cocktails')
      table.integer('quantity').notNullable()
      table.string('unit', 255).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}