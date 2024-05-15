import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cocktail_ingredient'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cocktail_id').unsigned().references('cocktails.id')
      table.integer('ingredient_id').unsigned().references('ingredients.id')
      table.unique(['cocktail_id', 'ingredient_id'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}