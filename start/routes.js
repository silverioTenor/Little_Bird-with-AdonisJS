'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')

Route.group(() => {
  Route.resource('/tweets', 'TweetController').apiOnly().except("update")
  Route.patch('/tweets/like/:tweet_id', 'LikeController.store')
  Route.patch('/tweets/dislike/:tweet_id', 'LikeController.destroy')
}).middleware("auth")

Route.group(() => {
  Route.resource('/comments', 'CommentController').apiOnly().except(["show", "update"])
  Route.patch('/comments/like/:comment_id', 'LikeController.store')
  Route.patch('/comments/dislike/:comment_id', 'LikeController.destroy')
}).middleware("auth")

