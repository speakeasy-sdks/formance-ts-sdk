/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not.
 *
 * @remarks
 *
 */
export enum BalanceOperator {
    Gte = "gte",
    Lte = "lte",
    Gt = "gt",
    Lt = "lt",
    E = "e",
    Ne = "ne",
}

export class ListAccountsRequest extends SpeakeasyBase {
    /**
     * Filter accounts by address pattern (regular expression placed between ^ and $).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
    address?: string;

    /**
     * Filter accounts by their balance (default operator is gte)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=balance" })
    balance?: number;

    /**
     * Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=balanceOperator" })
    balanceOperator?: BalanceOperator;

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
     * Name of the ledger.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
    ledger: string;

    /**
     * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
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
}

export class ListAccountsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    accountsCursorResponse?: shared.AccountsCursorResponse;

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
    rawResponse: AxiosResponse;
}
