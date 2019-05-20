'use strict'
const Customer = use('App/Models/Customer');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   * método para mostrar los registros que se encuentran en la tabla customers
   */
  async index ({ request, response, view }) 
  {
    let customers = await Customer.query().with('user').fetch();
    return response.json(contacts);
  }

  /**
   * Render a form to be used for creating a new customer.
   * GET customers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * método para crear un registro en la tabla customer
   */
  async store ({ request, response }) 
  {
    const id = request.input('id');
    const document = request.input('document');
    const name = request.input('name');
    const birthday = request.input('birthday');
    const phone = request.input('phone');

    const customer = new Customer();
    customer.id = id;
    customer.document = document;
    customer.name = name;
    customer.birthday = birthday;
    customer.phone = phone;

    await customer.save();
    return response.json(contact);
  }

  /**
   * Display a single customer.
   * GET customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) 
  {
    
  }

  /**
   * Render a form to update an existing customer.
   * GET customers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * método usado para actualizar la  información de la tabla customer, buscando el registro por la columna id
   */
  async update ({ params, request, response }) 
  {
    const id = request.input('id');
    const document = request.input('document');
    const name = request.input('name');
    const birthday = request.input('birthday');
    const phone = request.input('phone');

    let customer = await Customer.find(params.id);

    customer.id = id;
    customer.document = document;
    customer.name = name;
    customer.birthday = birthday;
    customer.phone = phone;

    await customer.save();
    return response.json(contact);
  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * método para borrar un registro de la tabla customers, buscandolo por la columna id
   */
  async destroy ({ params, request, response }) 
  {
    await Customer.find(params.id).delete();
    return response.json({message: 'customer deleted'});
  }
}

module.exports = CustomerController
