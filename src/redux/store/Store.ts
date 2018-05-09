import { IAccountState, AccountReducer } from '../accounts';
import { NavigationReducer } from "../navigation";
import { Reducer, combineReducers, createStore, Store, DeepPartial, applyMiddleware } from 'redux';
import { ReducerState as INavigationState } from "react-navigation-redux-helpers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import { navigationMiddleware } from '../../navigation/AppNavigator';

export interface IState {
    accountState: IAccountState;
    navigationState: INavigationState;
}

export const reducers: Reducer<IState> = combineReducers<IState>({
    accountState: AccountReducer,
    navigationState: NavigationReducer
});

const initialState: DeepPartial<IState> = {
    accountState: { accounts: [] }
};

export function configureStore(): Store<IState> {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore<IState, any, any, any>(
        reducers,
        initialState,
        applyMiddleware(sagaMiddleware, navigationMiddleware),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}