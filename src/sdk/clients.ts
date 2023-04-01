/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Everything related to Clients
 */
export class Clients {
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
   * Add scope to client
   */
  addScopeToClient(
    req: operations.AddScopeToClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddScopeToClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddScopeToClientRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/clients/{clientId}/scopes/{scopeId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.AddScopeToClientResponse =
        new operations.AddScopeToClientResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
      }

      return res;
    });
  }

  /**
   * Create client
   */
  createClient(
    req: shared.CreateClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.CreateClientRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/auth/clients";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
      const res: operations.CreateClientResponse =
        new operations.CreateClientResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createClientResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CreateClientResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Add a secret to a client
   */
  createSecret(
    req: operations.CreateSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSecretRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/clients/{clientId}/secrets",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "createSecretRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
      const res: operations.CreateSecretResponse =
        new operations.CreateSecretResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createSecretResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CreateSecretResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Delete client
   */
  deleteClient(
    req: operations.DeleteClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteClientRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/clients/{clientId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteClientResponse =
        new operations.DeleteClientResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
      }

      return res;
    });
  }

  /**
   * Delete scope from client
   */
  deleteScopeFromClient(
    req: operations.DeleteScopeFromClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteScopeFromClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteScopeFromClientRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/clients/{clientId}/scopes/{scopeId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteScopeFromClientResponse =
        new operations.DeleteScopeFromClientResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
      }

      return res;
    });
  }

  /**
   * Delete a secret from a client
   */
  deleteSecret(
    req: operations.DeleteSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSecretRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/clients/{clientId}/secrets/{secretId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteSecretResponse =
        new operations.DeleteSecretResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 204:
          break;
      }

      return res;
    });
  }

  /**
   * List clients
   */
  listClients(
    config?: AxiosRequestConfig
  ): Promise<operations.ListClientsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/auth/clients";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ListClientsResponse =
        new operations.ListClientsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listClientsResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ListClientsResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Read client
   */
  readClient(
    req: operations.ReadClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReadClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReadClientRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/clients/{clientId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ReadClientResponse =
        new operations.ReadClientResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.readClientResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ReadClientResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Update client
   */
  updateClient(
    req: operations.UpdateClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateClientRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/clients/{clientId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "updateClientRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UpdateClientResponse =
        new operations.UpdateClientResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateClientResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UpdateClientResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
