/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetBalancesAggregatedRequest extends SpeakeasyBase {
    /**
     * Filter balances involving given account, either as source or destination.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
    address?: string;

    /**
     * Name of the ledger.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
    ledger: string;
}

export class GetBalancesAggregatedResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    aggregateBalancesResponse?: shared.AggregateBalancesResponse;

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
