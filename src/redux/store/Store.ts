import { IAccountState } from './AccountStore';
import { Reducer, combineReducers, createStore, Store, DeepPartial, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import accountStore from "./AccountStore";

export interface IState {
    accountState: IAccountState;
}

export const reducers: Reducer<IState> = combineReducers<IState>({
    accountState: accountStore
});

const initialState: DeepPartial<IState> = {
    accountState: { accounts: [] }
};

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(

): Store<IState> {
    return createStore<IState, any, any, any>(
        reducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
}

sagaMiddleware.run(rootSaga);