/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Everything related to Orchestration
 */
export class Orchestration {
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
   * Create workflow
   *
   * @remarks
   * Create a workflow
   */
  async createWorkflow(
    req: shared.CreateWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.CreateWorkflowRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/orchestration/flows";

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
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.CreateWorkflowResponse =
      new operations.CreateWorkflowResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.createWorkflowResponse = utils.objectToClass(
            httpRes?.data,
            shared.CreateWorkflowResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Get a flow by id
   *
   * @remarks
   * Get a flow by id
   */
  async getFlow(
    req: operations.GetFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFlowRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/orchestration/flows/{flowId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.GetFlowResponse = new operations.GetFlowResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getWorkflowResponse = utils.objectToClass(
            httpRes?.data,
            shared.GetWorkflowResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Get a workflow occurrence by id
   *
   * @remarks
   * Get a workflow occurrence by id
   */
  async getWorkflowOccurrence(
    req: operations.GetWorkflowOccurrenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkflowOccurrenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkflowOccurrenceRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/orchestration/flows/{flowId}/runs/{runId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.GetWorkflowOccurrenceResponse =
      new operations.GetWorkflowOccurrenceResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getWorkflowOccurrenceResponse = utils.objectToClass(
            httpRes?.data,
            shared.GetWorkflowOccurrenceResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * List registered flows
   *
   * @remarks
   * List registered flows
   */
  async listFlows(
    config?: AxiosRequestConfig
  ): Promise<operations.ListFlowsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/orchestration/flows";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.ListFlowsResponse = new operations.ListFlowsResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listWorkflowsResponse = utils.objectToClass(
            httpRes?.data,
            shared.ListWorkflowsResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * List occurrences of a workflow
   *
   * @remarks
   * List occurrences of a workflow
   */
  async listRuns(
    req: operations.ListRunsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRunsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRunsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/orchestration/flows/{flowId}/runs",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.ListRunsResponse = new operations.ListRunsResponse({
      statusCode: httpRes.status,
      contentType: contentType,
      rawResponse: httpRes,
    });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.listRunsResponse = utils.objectToClass(
            httpRes?.data,
            shared.ListRunsResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Get server info
   */
  async orchestrationgetServerInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.OrchestrationgetServerInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/orchestration/_info";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.OrchestrationgetServerInfoResponse =
      new operations.OrchestrationgetServerInfoResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.serverInfo = utils.objectToClass(
            httpRes?.data,
            shared.ServerInfo
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Run workflow
   *
   * @remarks
   * Run workflow
   */
  async runWorkflow(
    req: operations.RunWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunWorkflowRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/orchestration/flows/{flowId}/runs",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RunWorkflowResponse =
      new operations.RunWorkflowResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.runWorkflowResponse = utils.objectToClass(
            httpRes?.data,
            shared.RunWorkflowResponse
          );
        }
        break;
      default:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }
}
