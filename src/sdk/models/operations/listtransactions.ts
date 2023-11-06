/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListTransactionsRequest extends SpeakeasyBase {
    /**
     * Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
    account?: string;

    /**
     * Parameter used in pagination requests. Maximum page size is set to 15.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
    cursor?: string;

    /**
     * Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" })
    destination?: string;

    /**
     * Filter transactions that occurred before this timestamp.
     *
     * @remarks
     * The format is RFC3339 and is exclusive (for example, "2023-01-02T15:04:01Z" excludes the first second of 4th minute).
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
    endTime?: Date;

    /**
     * Name of the ledger.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
    ledger: string;

    /**
     * Filter transactions by metadata key value pairs.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=metadata" })
    metadata?: Record<string, string>;

    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
    pageSize?: number;

    /**
     * Find transactions by reference field.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reference" })
    reference?: string;

    /**
     * Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
    source?: string;

    /**
     * Filter transactions that occurred after this timestamp.
     *
     * @remarks
     * The format is RFC3339 and is inclusive (for example, "2023-01-02T15:04:01Z" includes the first second of 4th minute).
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
    startTime?: Date;
}

export class ListTransactionsResponse extends SpeakeasyBase {
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

    /**
     * OK
     */
    @SpeakeasyMetadata()
    transactionsCursorResponse?: shared.TransactionsCursorResponse;
}
