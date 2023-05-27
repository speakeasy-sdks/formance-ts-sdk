/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RunWorkflowRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: Record<string, string>;

    /**
     * The flow id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flowId" })
    flowId: string;

    /**
     * Wait end of the workflow before return
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wait" })
    wait?: boolean;
}

export class RunWorkflowResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * General error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * The workflow occurrence
     */
    @SpeakeasyMetadata()
    runWorkflowResponse?: shared.RunWorkflowResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
