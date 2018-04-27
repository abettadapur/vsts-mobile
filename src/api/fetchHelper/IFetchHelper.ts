import * as _ from 'lodash';

export interface IFetchHelper {
    get(url: string, headers: _.Dictionary<string>): Promise<Response>;
    put(url: string, headers: _.Dictionary<string>, body: any): Promise<Response>;
    post(url: string, headers: _.Dictionary<string>, body: any): Promise<Response>;
    delete(url: string, headers: _.Dictionary<string>): Promise<Response>;
}