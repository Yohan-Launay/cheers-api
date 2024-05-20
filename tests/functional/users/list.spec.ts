import { test } from '@japa/runner'

test.group('Users list', () => {
  test('get a list of users', async ({ client }) => {
    const response = await client.get('/api/users')

    console.log(response.body())
    console.log(response.status())
  })
})