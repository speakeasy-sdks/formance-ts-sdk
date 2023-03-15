import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Transactions {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * createTransactions - Create a new batch of transactions to a ledger
   **/
  createTransactions(
    req: operations.CreateTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/ledger/{ledger}/transactions/batch",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateTransactionsResponse =
        new operations.CreateTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.transactionsResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.TransactionsResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * addMetadataOnTransaction - Set the metadata of a transaction by its ID
   **/
  addMetadataOnTransaction(
    req: operations.AddMetadataOnTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddMetadataOnTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddMetadataOnTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/ledger/{ledger}/transactions/{txid}/metadata",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.AddMetadataOnTransactionResponse =
        new operations.AddMetadataOnTransactionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * countTransactions - Count the transactions from a ledger
   **/
  countTransactions(
    req: operations.CountTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CountTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CountTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/ledger/{ledger}/transactions",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "head",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CountTransactionsResponse =
        new operations.CountTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * createTransaction - Create a new transaction to a ledger
   **/
  createTransaction(
    req: operations.CreateTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/ledger/{ledger}/transactions",
      req.pathParams
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CreateTransactionResponse =
        new operations.CreateTransactionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.transactionsResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.TransactionsResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getTransaction - Get transaction from a ledger by its ID
   **/
  getTransaction(
    req: operations.GetTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/ledger/{ledger}/transactions/{txid}",
      req.pathParams
    );

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
      const res: operations.GetTransactionResponse =
        new operations.GetTransactionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.transactionResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.TransactionResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listTransactions - List transactions from a ledger
   *
   * List transactions from a ledger, sorted by txid in descending order.
   **/
  listTransactions(
    req: operations.ListTransactionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTransactionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTransactionsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/ledger/{ledger}/transactions",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListTransactionsResponse =
        new operations.ListTransactionsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.transactionsCursorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.TransactionsCursorResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * revertTransaction - Revert a ledger transaction by its ID
   **/
  revertTransaction(
    req: operations.RevertTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevertTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevertTransactionRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/ledger/{ledger}/transactions/{txid}/revert",
      req.pathParams
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.RevertTransactionResponse =
        new operations.RevertTransactionResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.transactionResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.TransactionResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.errorResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
