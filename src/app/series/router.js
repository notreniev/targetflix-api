



export const init = router => {
  router
    .route('/movies')
    .get(authenticate, controller.getMovies)

  router
    .route('/series')
    .get(authenticate, controller.getSeries)

  router
    .route('/highlights')
    .get(authenticate, controller.loadHighlights)
}