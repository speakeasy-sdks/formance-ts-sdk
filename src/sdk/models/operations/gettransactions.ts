/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetTransactionsRequest extends SpeakeasyBase {
  /**
   * Parameter used in pagination requests.
   *
   * @remarks
   * Set to the value of next for the next page of results.
   * Set to the value of previous for the previous page of results.
   * No other parameters can be set when the cursor is set.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: string;

  /**
   * The maximum number of results to return per page
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;

  /**
   * A wallet ID to filter on
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=wallet_id",
  })
  walletId?: string;
}

export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  getTransactionsResponse?: shared.GetTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  walletsErrorResponse?: shared.WalletsErrorResponse;
}
