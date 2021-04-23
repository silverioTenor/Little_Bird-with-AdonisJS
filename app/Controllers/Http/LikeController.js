'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tweet = use('App/Models/Tweet')
const Comment = use('App/Models/Comment')

/**
 * Resourceful controller for interacting with likes
 */
class LikeController {
  /**
   * Create/save a new like.
   * POST likes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async store({ params }) {
    if (params?.tweet_id) {
      const tweet = await Tweet.find(params.tweet_id)

      tweet.like += 1

      await tweet.save()

      return tweet
    }
    else if (params?.comment_id) {
      const comment = await Comment.find(params.comment_id)

      comment.like += 1

      await comment.save()

      return comment
    }
  }

  /**
   * Display a single like.
   * GET likes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Delete a like with id.
   * DELETE likes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    if (params?.tweet_id) {
      const tweet = await Tweet.find(params.tweet_id)

      if (tweet.like > 0) {
        tweet.like -= 1

        await tweet.save()
      }

      return tweet
    }
    else if (params?.comment_id) {
      const comment = await Comment.find(params.comment_id)

      if (comment.like > 0) {
        comment.like -= 1

        await comment.save()
      }

      return comment
    }
  }
}

module.exports = LikeController
