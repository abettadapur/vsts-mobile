import { Action } from 'redux';
import { VssAccount } from '../../models/Account';
import { createAction } from '../../utilities/ActionHelper';

export interface FetchAccountsAction extends Action {
    type: AccountActionTypes.FetchAccounts;
}

export interface FetchAccountsSucceededAction extends Action {
    type: AccountActionTypes.FetchAccountsSucceeded;
    payload: VssAccount[];
}

export interface FetchAccountsFailedAction extends Action {
    type: AccountActionTypes.FetchAccountsFailed
    payload: Error;
}

export const AccountActions = {
    fetchAccounts: (): FetchAccountsAction => createAction(AccountActionTypes.FetchAccounts),
    fetchAccountsSucceeded: (accounts: VssAccount[]): FetchAccountsSucceededAction => createAction(AccountActionTypes.FetchAccountsSucceeded, accounts),
    fetchAccountsFailed: (error: Error): FetchAccountsFailedAction => createAction(AccountActionTypes.FetchAccountsFailed, error)
};

export enum AccountActionTypes {
    FetchAccounts = "FetchAccounts",
    FetchAccountsSucceeded = "FetchAccountsSucceeded",
    FetchAccountsFailed = "FetchAccountsFailed"
}