/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const CocktailsController = () => import('#controllers/cocktails_controller')
const ReviewsController = () => import('#controllers/reviews_controller')
const StepsController = () => import('#controllers/steps_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const IngredientsController = () => import('#controllers/ingredients_controller')
const UtensilsController = () => import('#controllers/utensils_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', async () => {
  return { hello: 'world' }
})



router.group(() => {
  router.post('/auth/register', [AuthController, 'register'])
  router.post('/auth/login', [AuthController, 'login'])

  router.get('/users', [UsersController, 'index'])
  router.post('/users', [UsersController, 'store'])
  router.get('/users/:id', [UsersController, 'show'])
  router.put('/users/:id', [UsersController, 'update'])
  router.delete('/users/:id', [UsersController, 'destroy'])

  router.get('/cocktails', [CocktailsController, 'index'])
  router.post('/cocktails', [CocktailsController, 'store'])
  router.get('/cocktails/:id', [CocktailsController, 'show'])
  router.put('/cocktails/:id', [CocktailsController, 'update'])
  router.delete('/cocktails/:id', [CocktailsController, 'destroy'])

  router.get('/reviews', [ReviewsController, 'index'])
  router.post('/reviews', [ReviewsController, 'store'])
  router.get('/reviews/:id', [ReviewsController, 'show'])
  router.put('/reviews/:id', [ReviewsController, 'update'])
  router.delete('/reviews/:id', [ReviewsController, 'destroy'])

  router.get('/steps', [StepsController, 'index'])
  router.post('/steps', [StepsController, 'store'])
  router.get('/steps/:id', [StepsController, 'show'])
  router.put('/steps/:id', [StepsController, 'update'])
  router.delete('/steps/:id', [StepsController, 'destroy'])

  router.get('/categories', [CategoriesController, 'index'])
  router.post('/categories', [CategoriesController, 'store'])
  router.get('/categories/:id', [CategoriesController, 'show'])
  router.put('/categories/:id', [CategoriesController, 'update'])
  router.delete('/categories/:id', [CategoriesController, 'destroy'])

  router.get('/ingredients', [IngredientsController, 'index'])
  router.post('/ingredients', [IngredientsController, 'store'])
  router.get('/ingredients/:id', [IngredientsController, 'show'])
  router.put('/ingredients/:id', [IngredientsController, 'update'])
  router.delete('/ingredients/:id', [IngredientsController, 'destroy'])

  router.get('/utensils', [UtensilsController, 'index'])
  router.post('/utensils', [UtensilsController, 'store'])
  router.get('/utensils/:id', [UtensilsController, 'show'])
  router.put('/utensils/:id', [UtensilsController, 'update'])
  router.delete('/utensils/:id', [UtensilsController, 'destroy'])

}).prefix('api')