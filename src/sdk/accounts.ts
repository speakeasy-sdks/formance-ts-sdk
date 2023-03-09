import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Accounts {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * addMetadataToAccount - Add metadata to an account
  **/
  addMetadataToAccount(
    req: operations.AddMetadataToAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddMetadataToAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddMetadataToAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/ledger/{ledger}/accounts/{address}/metadata", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddMetadataToAccountResponse =
            new operations.AddMetadataToAccountResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 204:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * countAccounts - Count the accounts from a ledger
  **/
  countAccounts(
    req: operations.CountAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CountAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CountAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/ledger/{ledger}/accounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "head",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CountAccountsResponse =
            new operations.CountAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers)
            });
        switch (true) {
          case httpRes?.status == 200:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAccount - Get account by its address
  **/
  getAccount(
    req: operations.GetAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/ledger/{ledger}/accounts/{address}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountResponse =
            new operations.GetAccountResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.accountResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AccountResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listAccounts - List accounts from a ledger
   *
   * List accounts from a ledger, sorted by address in descending order.
  **/
  listAccounts(
    req: operations.ListAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/ledger/{ledger}/accounts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAccountsResponse =
            new operations.ListAccountsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.accountsCursorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AccountsCursorResponse,
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.errorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.ErrorResponse,
              );
            }
            break;
        }

        return res;
      })
  }

}
