import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Webhooks {
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
   * activateConfig - Activate one config
   *
   * Activate a webhooks config by ID, to start receiving webhooks to its endpoint.
   **/
  activateConfig(
    req: operations.ActivateConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivateConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivateConfigRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/activate",
      req.pathParams
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
      const res: operations.ActivateConfigResponse =
        new operations.ActivateConfigResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.configResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ConfigResponse
            );
          }
          break;
        case httpRes?.status == 304:
          break;
      }

      return res;
    });
  }

  /**
   * changeConfigSecret - Change the signing secret of a config
   *
   * Change the signing secret of the endpoint of a webhooks config.
   *
   * If not passed or empty, a secret is automatically generated.
   * The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)
   *
   **/
  changeConfigSecret(
    req: operations.ChangeConfigSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChangeConfigSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChangeConfigSecretRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/secret/change",
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
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ChangeConfigSecretResponse =
        new operations.ChangeConfigSecretResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.configResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ConfigResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * deactivateConfig - Deactivate one config
   *
   * Deactivate a webhooks config by ID, to stop receiving webhooks to its endpoint.
   **/
  deactivateConfig(
    req: operations.DeactivateConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeactivateConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeactivateConfigRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/deactivate",
      req.pathParams
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
      const res: operations.DeactivateConfigResponse =
        new operations.DeactivateConfigResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.configResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ConfigResponse
            );
          }
          break;
        case httpRes?.status == 304:
          break;
      }

      return res;
    });
  }

  /**
   * deleteConfig - Delete one config
   *
   * Delete a webhooks config by ID.
   **/
  deleteConfig(
    req: operations.DeleteConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConfigRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}",
      req.pathParams
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
      const res: operations.DeleteConfigResponse =
        new operations.DeleteConfigResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  /**
   * getManyConfigs - Get many configs
   *
   * Sorted by updated date descending
   **/
  getManyConfigs(
    req: operations.GetManyConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetManyConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetManyConfigsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/webhooks/configs";

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
      const res: operations.GetManyConfigsResponse =
        new operations.GetManyConfigsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.configsResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ConfigsResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * insertConfig - Insert a new config
   *
   * Insert a new webhooks config.
   *
   * The endpoint should be a valid https URL and be unique.
   *
   * The secret is the endpoint's verification secret.
   * If not passed or empty, a secret is automatically generated.
   * The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)
   *
   * All eventTypes are converted to lower-case when inserted.
   *
   **/
  insertConfig(
    req: operations.InsertConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InsertConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InsertConfigRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/webhooks/configs";

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
      const res: operations.InsertConfigResponse =
        new operations.InsertConfigResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.configResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ConfigResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `text/plain`)) {
            res.insertConfig400TextPlainString = JSON.stringify(httpRes?.data);
          }
          break;
      }

      return res;
    });
  }

  /**
   * testConfig - Test one config
   *
   * Test a config by sending a webhook to its endpoint.
   **/
  testConfig(
    req: operations.TestConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestConfigRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/webhooks/configs/{id}/test",
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
      const res: operations.TestConfigResponse =
        new operations.TestConfigResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.attemptResponse = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.AttemptResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
