/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not.
 *
 * @remarks
 *
 */
export enum ListAccountsBalanceOperatorEnum {
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
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=address",
  })
  address?: string;

  /**
   * Pagination cursor, will return accounts after given address, in descending order.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  /**
   * Filter accounts by their balance (default operator is gte)
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=balance",
  })
  balance?: number;

  /**
   * Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=balanceOperator",
  })
  balanceOperator?: ListAccountsBalanceOperatorEnum;

  /**
   * Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, equal or not.
   *
   * @remarks
   * Deprecated, please use `balanceOperator` instead.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=balance_operator",
  })
  balanceOperatorDeprecated?: ListAccountsBalanceOperatorEnum;

  /**
   * Parameter used in pagination requests. Maximum page size is set to 15.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when this parameter is set.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: string;

  /**
   * Name of the ledger.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ledger",
  })
  ledger: string;

  /**
   * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=deepObject;explode=true;name=metadata",
  })
  metadata?: Record<string, any>;

  /**
   * The maximum number of results to return per page.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  /**
   * The maximum number of results to return per page.
   *
   * @remarks
   * Deprecated, please use `pageSize` instead.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_size",
  })
  pageSizeDeprecated?: number;

  /**
   * Parameter used in pagination requests. Maximum page size is set to 15.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when this parameter is set.
   * Deprecated, please use `cursor` instead.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pagination_token",
  })
  paginationToken?: string;
}

export class ListAccountsResponse extends SpeakeasyBase {
  /**
   * OK
   */
  @SpeakeasyMetadata()
  accountsCursorResponse?: shared.AccountsCursorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
