import { createStore, applyMiddleware } from 'redux';
import logger  from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer, applyMiddleware(sagaMiddleware,logger )),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};
export default configureStore;