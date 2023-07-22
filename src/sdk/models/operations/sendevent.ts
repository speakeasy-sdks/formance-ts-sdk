/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class SendEventRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class SendEventRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: SendEventRequestBody;

    /**
     * The instance id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceID" })
    instanceID: string;
}

export class SendEventResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * General error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
