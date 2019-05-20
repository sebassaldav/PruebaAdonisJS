'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
/**
 * creacion de rutas para hacer los movimientos del CRUD
 */
Route.put('/api/customers/:id', 'CustomerController.update');
Route.delete('/api/customers/id', 'CustomerController.destroy');
Route.post('/api/customers', 'CustomerController.store');
Route.get('api/customers', 'CustomerController.index');