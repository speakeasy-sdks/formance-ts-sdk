/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Everything related to Balances
 */
export class Balances {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get the balances from a ledger's account
     */
    async getBalances(
        req: operations.GetBalancesRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetBalancesResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetBalancesRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/ledger/{ledger}/balances", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetBalancesResponse = new operations.GetBalancesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.balancesCursorResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.BalancesCursorResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(httpRes?.data, shared.ErrorResponse);
                }
                break;
        }

        return res;
    }

    /**
     * Get the aggregated balances from selected accounts
     */
    async getBalancesAggregated(
        req: operations.GetBalancesAggregatedRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetBalancesAggregatedResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetBalancesAggregatedRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/ledger/{ledger}/aggregate/balances",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetBalancesAggregatedResponse =
            new operations.GetBalancesAggregatedResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.aggregateBalancesResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.AggregateBalancesResponse
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(httpRes?.data, shared.ErrorResponse);
                }
                break;
        }

        return res;
    }
}
