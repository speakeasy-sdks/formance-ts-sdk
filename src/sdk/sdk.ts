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
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * Open, modular foundation for unique payments flows
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

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.8.0";
  private _genVersion = "2.12.10";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.balances = new Balances(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.clients = new Clients(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.ledger = new Ledger(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.logs = new Logs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.mapping = new Mapping(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.orchestration = new Orchestration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.payments = new Payments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.scopes = new Scopes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.script = new Script(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.server = new Server(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.stats = new Stats(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.transactions = new Transactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.wallets = new Wallets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }

  /**
   * Get server info
   */
  getServerInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.GetServerInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/auth/_info";

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetServerInfoResponse =
        new operations.GetServerInfoResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverInfo = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerInfo
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get server info
   */
  paymentsgetServerInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsgetServerInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/payments/_info";

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PaymentsgetServerInfoResponse =
        new operations.PaymentsgetServerInfoResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverInfo = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerInfo
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get server info
   */
  searchgetServerInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.SearchgetServerInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/search/_info";

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.SearchgetServerInfoResponse =
        new operations.SearchgetServerInfoResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.serverInfo = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ServerInfo
            );
          }
          break;
      }

      return res;
    });
  }
}
