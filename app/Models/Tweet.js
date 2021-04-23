'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {
  owner() {
    return this.belongsTo("App/Models/User")
  }

  comment() {
    return this.hasMany("App/Models/Comment")
  }
}

module.exports = Tweet
