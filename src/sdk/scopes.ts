/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Everything related to Scopes
 */
export class Scopes {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Add a transient scope to a scope
     *
     * @remarks
     * Add a transient scope to a scope
     */
    async addTransientScope(
        req: operations.AddTransientScopeRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.AddTransientScopeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddTransientScopeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/auth/scopes/{scopeId}/transient/{transientScopeId}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.AddTransientScopeResponse = new operations.AddTransientScopeResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 204:
                break;
        }

        return res;
    }

    /**
     * Create scope
     *
     * @remarks
     * Create scope
     */
    async createScope(
        req: shared.CreateScopeRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateScopeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.CreateScopeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/auth/scopes";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.CreateScopeResponse = new operations.CreateScopeResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createScopeResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.CreateScopeResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete scope
     *
     * @remarks
     * Delete scope
     */
    async deleteScope(
        req: operations.DeleteScopeRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteScopeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteScopeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/auth/scopes/{scopeId}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteScopeResponse = new operations.DeleteScopeResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 204:
                break;
        }

        return res;
    }

    /**
     * Delete a transient scope from a scope
     *
     * @remarks
     * Delete a transient scope from a scope
     */
    async deleteTransientScope(
        req: operations.DeleteTransientScopeRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteTransientScopeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteTransientScopeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/api/auth/scopes/{scopeId}/transient/{transientScopeId}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "*/*";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

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
    }

    /**
     * List scopes
     *
     * @remarks
     * List Scopes
     */
    async listScopes(config?: AxiosRequestConfig): Promise<operations.ListScopesResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/auth/scopes";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.ListScopesResponse = new operations.ListScopesResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.listScopesResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ListScopesResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Read scope
     *
     * @remarks
     * Read scope
     */
    async readScope(
        req: operations.ReadScopeRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ReadScopeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReadScopeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/auth/scopes/{scopeId}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

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

        const res: operations.ReadScopeResponse = new operations.ReadScopeResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.readScopeResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ReadScopeResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update scope
     *
     * @remarks
     * Update scope
     */
    async updateScope(
        req: operations.UpdateScopeRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateScopeResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateScopeRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/api/auth/scopes/{scopeId}", req);

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

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateScopeResponse = new operations.UpdateScopeResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateScopeResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.UpdateScopeResponse
                    );
                }
                break;
        }

        return res;
    }
}
