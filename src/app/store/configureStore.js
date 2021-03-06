import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import rootReducer from 'app/reducers/rootReducer'

export default function configureStore(preloadedState) {
    const middlewares = [thunk]
    const middlewareEnhancers = applyMiddleware(...middlewares)
    const storeEnhancer = [middlewareEnhancers]
    const composedEnhancer = composeWithDevTools(...storeEnhancer)

    const store = createStore(rootReducer, preloadedState, composedEnhancer)

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/rootReducer',() => {
                const newRootReducer = require("../reducers/rootReducer").default;
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store
}
