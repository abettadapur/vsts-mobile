import { all } from 'redux-saga/effects';
import { fetchAccountsSaga } from './LoadAccounts';

export default function* rootSaga() {
    yield all([
        fetchAccountsSaga()
    ]);
}