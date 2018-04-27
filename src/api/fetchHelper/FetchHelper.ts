import * as _ from "lodash";
import { IFetchHelper } from "./IFetchHelper";
import { Logger } from "../../utilities/Logger";

export class FetchHelper implements IFetchHelper {
    public async get(url: string, headers: _.Dictionary<string>): Promise<Response> {
        Logger.info("Network", "GET " + url + ", Headers: " + JSON.stringify(headers));
        let response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        Logger.info("Network", "GET " + response.status + " " + url);
        return response;
    }

    public async put(url: string, headers: _.Dictionary<string>, body: any): Promise<Response> {
        let jsonBody = JSON.stringify(body);

        Logger.info("Network", "PUT " + url + ", Body: " + body + ", Headers: " + JSON.stringify(headers));
        let response = await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: jsonBody
        });

        Logger.info("Network", "PUT " + response.status + " " + url);
        return response;
    }

    public async post(url: string, headers: _.Dictionary<string>, body: any): Promise<Response> {
        let jsonBody = JSON.stringify(body);

        Logger.info("Network", "POST " + url + ", Body: " + body + ", Headers: " + JSON.stringify(headers));
        let response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: jsonBody
        });

        Logger.info("Network", "POST " + response.status + " " + url);
        return response;
    }

    public async delete(url: string, headers: _.Dictionary<string>): Promise<Response> {
        Logger.info("Network", "DELETE " + url + ", Headers: " + JSON.stringify(headers));
        let response = await fetch(url, {
            method: 'DELETE',
            headers: headers
        });

        Logger.info("Network", "DELETE " + response.status + " " + url);
        return response;
    }
}