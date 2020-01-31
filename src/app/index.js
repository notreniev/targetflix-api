import * as movieRouter from './movies/router'
import * as authRouter from './auth/router'


export const initializeRoutes = router => {
  authRouter.init(router)
  movieRouter.init(router)
  //seriesRouter.init(router)
  //usersRouter.init(router)
  //...
  return router
}