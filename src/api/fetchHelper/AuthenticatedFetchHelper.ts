import { IFetchHelper } from "./IFetchHelper";

const PAT = "ilflzm6p6uehvmhk4c5ryxqz4hbkv4qzqici6tibjnqxy2z6a6ya";

export class AuthenticatedFetchHelper implements IFetchHelper {
    private innerLayer: IFetchHelper;

    constructor(innerLayer: IFetchHelper) {
        this.innerLayer = innerLayer;
    }

    public async get(url: string, headers: _.Dictionary<string>): Promise<any> {
        await this.appendToken(headers);
        return this.innerLayer.get(url, headers);
    }

    public async put(url: string, headers: _.Dictionary<string>, body: any): Promise<any> {
        await this.appendToken(headers);
        return this.innerLayer.put(url, headers, body);
    }

    public async post(url: string, headers: _.Dictionary<string>, body: any): Promise<any> {
        await this.appendToken(headers);
        return this.innerLayer.post(url, headers, body);
    }

    public async delete(url: string, headers: _.Dictionary<string>): Promise<any> {
        await this.appendToken(headers);
        return this.innerLayer.delete(url, headers);
    }

    private async appendToken(headers: _.Dictionary<string>): Promise<void> {
        const token = PAT;
        headers['Authorization'] = 'Bearer ' + token;
    }
}