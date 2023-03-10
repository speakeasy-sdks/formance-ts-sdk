import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Balances {
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
   * getBalances - Get the balances from a ledger's account
  **/
  getBalances(
    req: operations.GetBalancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBalancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBalancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/ledger/{ledger}/balances", req.pathParams);
    
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
        const res: operations.GetBalancesResponse =
            new operations.GetBalancesResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.balancesCursorResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.BalancesCursorResponse,
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
   * getBalancesAggregated - Get the aggregated balances from selected accounts
  **/
  getBalancesAggregated(
    req: operations.GetBalancesAggregatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBalancesAggregatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBalancesAggregatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/ledger/{ledger}/aggregate/balances", req.pathParams);
    
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
        const res: operations.GetBalancesAggregatedResponse =
            new operations.GetBalancesAggregatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes
            });
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.aggregateBalancesResponse = utils.deserializeJSONResponse(
                httpRes?.data,
                shared.AggregateBalancesResponse,
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
