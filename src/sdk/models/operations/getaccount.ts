/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAccountRequest extends SpeakeasyBase {
    /**
     * Exact address of the account. It must match the following regular expressions pattern:
     *
     * @remarks
     * ```
     * ^\w+(:\w+)*$
     * ```
     *
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
    address: string;

    /**
     * Name of the ledger.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
    ledger: string;
}

export class GetAccountResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    accountResponse?: shared.AccountResponse;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Error
     */
    @SpeakeasyMetadata()
    errorResponse?: shared.ErrorResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
