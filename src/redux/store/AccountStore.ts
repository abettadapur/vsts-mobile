import { VssAccount } from '../../models/Account';
import { Reducer, Action } from 'redux';
import { AccountActionTypes, FetchAccountsFailedAction, FetchAccountsSucceededAction } from '../actions/Actions';

export interface IAccountState {
    accounts: VssAccount[];
}

const reducer: Reducer<IAccountState> = (state: IAccountState, action: Action) => {
    if (!state) {
        return { accounts: [] };
    }

    switch (action.type) {
        case AccountActionTypes.FetchAccountsFailed:
            return handleFetchAccountsFailed(state, action as FetchAccountsFailedAction);
        case AccountActionTypes.FetchAccountsSucceeded:
            return handleFetchAccountsSucceeded(state, action as FetchAccountsSucceededAction);
        default:
            return state;
    }
}

function handleFetchAccountsFailed(state: IAccountState, action: FetchAccountsFailedAction): IAccountState {
    return state;
}

function handleFetchAccountsSucceeded(state: IAccountState, action: FetchAccountsSucceededAction): IAccountState {
    return {
        ...state,
        accounts: action.payload
    };
}

export default reducer;