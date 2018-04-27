import { IFetchHelper } from './fetchHelper/IFetchHelper';
import { AuthenticatedFetchHelper } from './fetchHelper/AuthenticatedFetchHelper';
import { FetchHelper } from './fetchHelper/FetchHelper';
import { VssAccount, IVssAccountResource, fromVssAccountResource } from '../models/Account';
import * as _ from 'lodash';

export interface IAccountApi {

}

export const DEFAULT_HEADERS = {};

export class AccountApi {
    private _fetchHelper: IFetchHelper;
    constructor(fetchHelper: IFetchHelper = new AuthenticatedFetchHelper(new FetchHelper())) {
        this._fetchHelper = fetchHelper;
    }

    public async getAccounts(): Promise<VssAccount[]> {
        const url = "https://app.vssps.visualstudio.com/_apis/Accounts";
        const response = await this._fetchHelper.get(url, DEFAULT_HEADERS);
        const accounts: IVssAccountResource[] = await response.json() as IVssAccountResource[];
        return _.map(accounts, account => fromVssAccountResource(account));
    }
}

export default new AccountApi();