/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListLogsRequest extends SpeakeasyBase {
  /**
   * Pagination cursor, will return the logs after a given ID. (in descending order).
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

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
   * Filter transactions that occurred before this timestamp.
   *
   * @remarks
   * The format is RFC3339 and is exclusive (for example, "2023-01-02T15:04:01Z" excludes the first second of 4th minute).
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=endTime;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  endTime?: Date;

  /**
   * Filter transactions that occurred before this timestamp.
   *
   * @remarks
   * The format is RFC3339 and is exclusive (for example, "2023-01-02T15:04:01Z" excludes the first second of 4th minute).
   * Deprecated, please use `endTime` instead.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_time;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  endTimeDeprecated?: Date;

  /**
   * Name of the ledger.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ledger",
  })
  ledger: string;

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

  /**
   * Filter transactions that occurred after this timestamp.
   *
   * @remarks
   * The format is RFC3339 and is inclusive (for example, "2023-01-02T15:04:01Z" includes the first second of 4th minute).
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=startTime;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  startTime?: Date;

  /**
   * Filter transactions that occurred after this timestamp.
   *
   * @remarks
   * The format is RFC3339 and is inclusive (for example, "2023-01-02T15:04:01Z" includes the first second of 4th minute).
   * Deprecated, please use `startTime` instead.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_time;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  startTimeDeprecated?: Date;
}

export class ListLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  logsCursorResponse?: shared.LogsCursorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
