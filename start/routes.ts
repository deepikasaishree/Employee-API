/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import CalculationsController from 'App/Controllers/Http/CalculationsController'
import CrudsController from 'App/Controllers/Http/CrudsController'
import EmployeesController from 'App/Controllers/Http/EmployeesController'

Route.get('/', async () => {
  return { hello: 'world' }
})

const v = new EmployeesController()

Route.group(() => {
  Route.post('/', v.post)
  Route.get('/', v.get)
  Route.group(() => {
    Route.put('/:id', v.put)
    Route.patch('/:id', v.patch)
    Route.delete('/:id', v.delete)
  }).where('id', Route.matchers.number())
})
  .prefix('/emp')
  .middleware('auth')

Route.get('/list', values.getAll)
Route.post('/post', values.postNew)
Route.get('/get', values.detail)
Route.put('/put', values.putDetails)
Route.patch('/patch', values.patchDetails)
Route.delete('/delete', values.deleteDetails)

