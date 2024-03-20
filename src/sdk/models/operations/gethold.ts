/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetHoldRequest extends SpeakeasyBase {
    /**
     * The hold ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holdID" })
    holdID: string;
}

export class GetHoldResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Holds
     */
    @SpeakeasyMetadata()
    getHoldResponse?: shared.GetHoldResponse;

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

    /**
     * Error
     */
    @SpeakeasyMetadata()
    walletsErrorResponse?: shared.WalletsErrorResponse;
}
