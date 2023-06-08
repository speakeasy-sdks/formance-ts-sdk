/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Balances } from "./balances";
import { Clients } from "./clients";
import { Ledger } from "./ledger";
import { Logs } from "./logs";
import { Mapping } from "./mapping";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Orchestration } from "./orchestration";
import { Payments } from "./payments";
import { Scopes } from "./scopes";
import { Script } from "./script";
import { Search } from "./search";
import { Server } from "./server";
import { Stats } from "./stats";
import { Transactions } from "./transactions";
import { Users } from "./users";
import { Wallets } from "./wallets";
import { Webhooks } from "./webhooks";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v1.0.0-rc.5";
    sdkVersion = "0.26.0";
    genVersion = "2.37.0";

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
    /**
     * Everything related to Accounts
     */
    public accounts: Accounts;
    /**
     * Everything related to Balances
     */
    public balances: Balances;
    /**
     * Everything related to Clients
     */
    public clients: Clients;
    /**
     * Everything related to Ledger
     */
    public ledger: Ledger;
    /**
     * Everything related to Logs
     */
    public logs: Logs;
    /**
     * Everything related to Mapping
     */
    public mapping: Mapping;
    /**
     * Everything related to Orchestration
     */
    public orchestration: Orchestration;
    /**
     * Everything related to Payments
     */
    public payments: Payments;
    /**
     * Everything related to Scopes
     */
    public scopes: Scopes;
    /**
     * Everything related to Script
     */
    public script: Script;
    /**
     * Everything related to Search
     */
    public search: Search;
    /**
     * Everything related to Server
     */
    public server: Server;
    /**
     * Everything related to Stats
     */
    public stats: Stats;
    /**
     * Everything related to Transactions
     */
    public transactions: Transactions;
    /**
     * Everything related to Users
     */
    public users: Users;
    /**
     * Everything related to Wallets
     */
    public wallets: Wallets;
    /**
     * Everything related to Webhooks
     */
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

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
            serverDefaults: defaults,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.balances = new Balances(this.sdkConfiguration);
        this.clients = new Clients(this.sdkConfiguration);
        this.ledger = new Ledger(this.sdkConfiguration);
        this.logs = new Logs(this.sdkConfiguration);
        this.mapping = new Mapping(this.sdkConfiguration);
        this.orchestration = new Orchestration(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.scopes = new Scopes(this.sdkConfiguration);
        this.script = new Script(this.sdkConfiguration);
        this.search = new Search(this.sdkConfiguration);
        this.server = new Server(this.sdkConfiguration);
        this.stats = new Stats(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
        this.users = new Users(this.sdkConfiguration);
        this.wallets = new Wallets(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
    }

    /**
     * Get server info
     */
    async getServerInfo(config?: AxiosRequestConfig): Promise<operations.GetServerInfoResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/auth/_info";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetServerInfoResponse = new operations.GetServerInfoResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.serverInfo = utils.objectToClass(httpRes?.data, shared.ServerInfo);
                }
                break;
        }

        return res;
    }

    /**
     * Get server info
     */
    async paymentsgetServerInfo(
        config?: AxiosRequestConfig
    ): Promise<operations.PaymentsgetServerInfoResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/payments/_info";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PaymentsgetServerInfoResponse =
            new operations.PaymentsgetServerInfoResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.serverInfo = utils.objectToClass(httpRes?.data, shared.ServerInfo);
                }
                break;
        }

        return res;
    }

    /**
     * Get server info
     */
    async searchgetServerInfo(
        config?: AxiosRequestConfig
    ): Promise<operations.SearchgetServerInfoResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/search/_info";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SearchgetServerInfoResponse =
            new operations.SearchgetServerInfoResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.serverInfo = utils.objectToClass(httpRes?.data, shared.ServerInfo);
                }
                break;
        }

        return res;
    }
}
