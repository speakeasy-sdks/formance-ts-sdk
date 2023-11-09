/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { Accounts } from "./accounts";
import { Auth } from "./auth";
import { Balances } from "./balances";
import { Clients } from "./clients";
import { Ledger } from "./ledger";
import { Logs } from "./logs";
import { Orchestration } from "./orchestration";
import { Payments } from "./payments";
import { Scopes } from "./scopes";
import { Search } from "./search";
import { Server } from "./server";
import { Stats } from "./stats";
import { Transactions } from "./transactions";
import { Users } from "./users";
import { Wallets } from "./wallets";
import { Webhooks } from "./webhooks";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * local server
     */
    "http://localhost",
    /**
     * sandbox server
     */
    "https://{organization}.sandbox.formance.cloud",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    authorization?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows setting the organization variable for url substitution
     */
    organization?: string;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v1.0.20230614";
    sdkVersion = "0.32.1";
    genVersion = "2.185.0";
    userAgent = "speakeasy-sdk/typescript 0.32.1 2.185.0 v1.0.20230614 @speakeasy-sdks/formance";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Formance Stack API: Open, modular foundation for unique payments flows
 *
 * @remarks
 *
 * # Introduction
 * This API is documented in **OpenAPI format**.
 *
 * # Authentication
 * Formance Stack offers one forms of authentication:
 *   - OAuth2
 * OAuth2 - an open protocol to allow secure authorization in a simple
 * and standard method from web, mobile and desktop applications.
 * <SecurityDefinitions />
 *
 */
export class Formance {
    public auth: Auth;
    public clients: Clients;
    public scopes: Scopes;
    public users: Users;
    public ledger: Ledger;
    public server: Server;
    public accounts: Accounts;
    public balances: Balances;
    public logs: Logs;
    public stats: Stats;
    public transactions: Transactions;
    public orchestration: Orchestration;
    public payments: Payments;
    public search: Search;
    public wallets: Wallets;
    public webhooks: Webhooks;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        let defaults: any = {};

        const serverDefaults = [
            {},
            {
                organization: props?.organization?.toString() ?? "",
            },
        ];
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
            defaults = serverDefaults[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ authorization: props?.authorization }),

            serverURL: serverURL,
            serverDefaults: defaults,
            retryConfig: props?.retryConfig,
        });

        this.auth = new Auth(this.sdkConfiguration);
        this.clients = new Clients(this.sdkConfiguration);
        this.scopes = new Scopes(this.sdkConfiguration);
        this.users = new Users(this.sdkConfiguration);
        this.ledger = new Ledger(this.sdkConfiguration);
        this.server = new Server(this.sdkConfiguration);
        this.accounts = new Accounts(this.sdkConfiguration);
        this.balances = new Balances(this.sdkConfiguration);
        this.logs = new Logs(this.sdkConfiguration);
        this.stats = new Stats(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
        this.orchestration = new Orchestration(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.search = new Search(this.sdkConfiguration);
        this.wallets = new Wallets(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
    }

    /**
     * Show stack version information
     */
    async getVersions(config?: AxiosRequestConfig): Promise<operations.GetVersionsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/versions";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetVersionsResponse = new operations.GetVersionsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getVersionsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.GetVersionsResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
