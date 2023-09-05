/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Auth } from "./auth";
import { Balances } from "./balances";
import { Clients } from "./clients";
import { Ledger } from "./ledger";
import { Logs } from "./logs";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
    security?: shared.Security | (() => Promise<shared.Security>);
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
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v1.0.20230614";
    sdkVersion = "0.50.0";
    genVersion = "2.96.3";

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
    public accounts: Accounts;
    public auth: Auth;
    public balances: Balances;
    public clients: Clients;
    public ledger: Ledger;
    public logs: Logs;
    public orchestration: Orchestration;
    public payments: Payments;
    public scopes: Scopes;
    public search: Search;
    public server: Server;
    public stats: Stats;
    public transactions: Transactions;
    public users: Users;
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

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            serverDefaults: defaults,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.auth = new Auth(this.sdkConfiguration);
        this.balances = new Balances(this.sdkConfiguration);
        this.clients = new Clients(this.sdkConfiguration);
        this.ledger = new Ledger(this.sdkConfiguration);
        this.logs = new Logs(this.sdkConfiguration);
        this.orchestration = new Orchestration(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.scopes = new Scopes(this.sdkConfiguration);
        this.search = new Search(this.sdkConfiguration);
        this.server = new Server(this.sdkConfiguration);
        this.stats = new Stats(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
        this.users = new Users(this.sdkConfiguration);
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
        const url: string = baseURL.replace(/\/$/, "") + "/versions";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
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
