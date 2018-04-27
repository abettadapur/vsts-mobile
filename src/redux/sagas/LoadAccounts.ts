import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import AccountApi from "../../api/AccountApi";
import { AccountActionTypes, AccountActions } from '../actions/Actions';
import { VssAccount } from '../../models/Account';


function* fetchAccounts(): SagaIterator {
    try {
        const accounts: VssAccount[] = yield call(AccountApi.getAccounts);
        yield put(AccountActions.fetchAccountsSucceeded(accounts));
    } catch (error) {
        yield put(AccountActions.fetchAccountsFailed(error));
    }
}

export function* fetchAccountsSaga(): SagaIterator {
    yield takeLatest(AccountActionTypes.FetchAccounts, fetchAccounts);
}