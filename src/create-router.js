import { Router5 } from 'router5'

export default function createRouter(routes) {
    const router = new Router5()
        .setOption('useHash', false)
        .setOption('defaultRoute', 'search')
        // Routes
        .addNode('home','/home')
        .addNode('search','/search')
        // Plugins
        .usePlugin(Router5.loggerPlugin())

    return router;
};
