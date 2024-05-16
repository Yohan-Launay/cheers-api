/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import User from '#models/user'
const UsersController = () => import('#controllers/users_controller')
const CocktailsController = () => import('#controllers/cocktails_controller')
const ReviewsController = () => import('#controllers/reviews_controller')

router.group(() => {
  router.post('users/:id/tokens', async ({ params }) => {
    const user = await User.findOrFail(params.id)
    const token = await User.accessTokens.create(user)
  
    return token
  })

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
}).prefix('api')