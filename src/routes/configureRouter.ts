import createRouter, {MiddlewareFactory, Router} from "router5";
import browserPlugin from "router5/plugins/browser";
import listenerPlugin from "router5/plugins/listeners";
import routes from "./routes";

export function configureRouter(): Router {
    const router: Router = createRouter(routes, {
        defaultRoute: 'home'
    })
        .usePlugin(browserPlugin({useHash: false}))
        .usePlugin(listenerPlugin())

    const middlewares: MiddlewareFactory[] = [];

    router.useMiddleware(...middlewares);

    return router;
}