import * as controller from './controller'

export const init = router => {
  router
    .route('/users')
    .get(controller.getAll)

    router
    .route('/users/liked')
    .get(controller.getAll)

    router
    .route('/users/like')
    .get(controller.getAll)
}