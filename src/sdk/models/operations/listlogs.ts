import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Transform, Type } from "class-transformer";


export class ListLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
  ledger: string;
}

export class ListLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  endTimeDeprecated?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSizeDeprecated?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagination_token" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  startTimeDeprecated?: Date;
}

export class ListLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListLogsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListLogsQueryParams;
}

export class ListLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  logsCursorResponse?: shared.LogsCursorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}