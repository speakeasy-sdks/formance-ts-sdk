import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Scopes {
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
   * addTransientScope - Add a transient scope to a scope
   *
   * Add a transient scope to a scope
   **/
  addTransientScope(
    req: operations.AddTransientScopeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddTransientScopeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddTransientScopeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/scopes/{scopeId}/transient/{transientScopeId}",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.AddTransientScopeResponse =
        new operations.AddTransientScopeResponse({
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
   * createScope - Create scope
   *
   * Create scope
   **/
  createScope(
    req: shared.CreateScopeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateScopeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.CreateScopeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/auth/scopes";

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
      const res: operations.CreateScopeResponse =
        new operations.CreateScopeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createScopeResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CreateScopeResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * deleteScope - Delete scope
   *
   * Delete scope
   **/
  deleteScope(
    req: operations.DeleteScopeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteScopeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteScopeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/scopes/{scopeId}",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteScopeResponse =
        new operations.DeleteScopeResponse({
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
   * deleteTransientScope - Delete a transient scope from a scope
   *
   * Delete a transient scope from a scope
   **/
  deleteTransientScope(
    req: operations.DeleteTransientScopeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTransientScopeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTransientScopeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/scopes/{scopeId}/transient/{transientScopeId}",
      req
    );

    const client: AxiosInstance = this._securityClient!;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteTransientScopeResponse =
        new operations.DeleteTransientScopeResponse({
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
   * listScopes - List scopes
   *
   * List Scopes
   **/
  listScopes(
    config?: AxiosRequestConfig
  ): Promise<operations.ListScopesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/auth/scopes";

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
      const res: operations.ListScopesResponse =
        new operations.ListScopesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listScopesResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ListScopesResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * readScope - Read scope
   *
   * Read scope
   **/
  readScope(
    req: operations.ReadScopeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReadScopeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReadScopeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/scopes/{scopeId}",
      req
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
      const res: operations.ReadScopeResponse =
        new operations.ReadScopeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.readScopeResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ReadScopeResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * updateScope - Update scope
   *
   * Update scope
   **/
  updateScope(
    req: operations.UpdateScopeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateScopeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateScopeRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/auth/scopes/{scopeId}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "updateScopeRequest",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient!;

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
      const res: operations.UpdateScopeResponse =
        new operations.UpdateScopeResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.updateScopeResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.UpdateScopeResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
