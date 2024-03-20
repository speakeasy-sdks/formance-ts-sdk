/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class RunWorkflowRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: Record<string, string>;

    /**
     * Wait end of the workflow before return
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wait" })
    wait?: boolean;

    /**
     * The flow id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflowID" })
    workflowID: string;
}

export class RunWorkflowResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * General error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * The workflow instance
     */
    @SpeakeasyMetadata()
    runWorkflowResponse?: shared.RunWorkflowResponse;

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
