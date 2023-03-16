import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

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
   * createWorkflow - Create workflow
   *
   * Create a workflow
   **/
  createWorkflow(
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
      const res: operations.CreateWorkflowResponse =
        new operations.CreateWorkflowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.createWorkflowResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.CreateWorkflowResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getFlow - Get a flow by id
   *
   * Get a flow by id
   **/
  getFlow(
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
      const res: operations.GetFlowResponse = new operations.GetFlowResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getWorkflowResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetWorkflowResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * getWorkflowOccurrence - Get a workflow occurrence by id
   *
   * Get a workflow occurrence by id
   **/
  getWorkflowOccurrence(
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
      const res: operations.GetWorkflowOccurrenceResponse =
        new operations.GetWorkflowOccurrenceResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getWorkflowOccurrenceResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.GetWorkflowOccurrenceResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listFlows - List registered flows
   *
   * List registered flows
   **/
  listFlows(
    config?: AxiosRequestConfig
  ): Promise<operations.ListFlowsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/orchestration/flows";

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
      const res: operations.ListFlowsResponse =
        new operations.ListFlowsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listWorkflowsResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ListWorkflowsResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * listRuns - List occurrences of a workflow
   *
   * List occurrences of a workflow
   **/
  listRuns(
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
      const res: operations.ListRunsResponse = new operations.ListRunsResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.listRunsResponse = httpRes?.data;
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * orchestrationgetServerInfo - Get server info
   **/
  orchestrationgetServerInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.OrchestrationgetServerInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/orchestration/_info";

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
      const res: operations.OrchestrationgetServerInfoResponse =
        new operations.OrchestrationgetServerInfoResponse({
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
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * runWorkflow - Run workflow
   *
   * Run workflow
   **/
  runWorkflow(
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

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

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
      const res: operations.RunWorkflowResponse =
        new operations.RunWorkflowResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.runWorkflowResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.RunWorkflowResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }
}
