import { CategoryFactory } from '#database/factories/category_factory'
import { CocktailFactory } from '#database/factories/cocktail_factory'
import { IngredientFactory } from '#database/factories/ingredient_factory'
import { ReviewFactory } from '#database/factories/review_factory'
import { StepFactory } from '#database/factories/step_factory'
import { UtensilFactory } from '#database/factories/utensil_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class IndexSeeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.seed(await import('#database/seeders/user_seeder'))
    // await this.seed(await import('#database/seeders/cocktail_seeder'))
    // await this.seed(await import('#database/seeders/ingredient_seeder'))
    // await this.seed(await import('#database/seeders/utensil_seeder'))
    // await this.seed(await import('#database/seeders/category_seeder'))
    // await this.seed(await import('#database/seeders/review_seeder'))
    // await this.seed(await import('#database/seeders/step_seeder'))
    await CocktailFactory.createMany(10)
    await StepFactory.createMany(10)
    await ReviewFactory.createMany(10)
    await CategoryFactory.createMany(10)
    await IngredientFactory.createMany(10)
    await UtensilFactory.createMany(10)
  }
}