/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class AddTransientScopeRequest extends SpeakeasyBase {
    /**
     * Scope ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scopeId" })
    scopeId: string;

    /**
     * Transient scope ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transientScopeId" })
    transientScopeId: string;
}

export class AddTransientScopeResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
