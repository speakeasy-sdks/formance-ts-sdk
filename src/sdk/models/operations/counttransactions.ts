import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Transform, Type } from "class-transformer";

export class CountTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ledger",
  })
  ledger: string;
}

export class CountTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=account",
  })
  account?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=destination",
  })
  destination?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=endTime;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  endTime?: Date;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_time;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  endTimeDeprecated?: Date;

  @SpeakeasyMetadata({
    data: "queryParam, style=deepObject;explode=true;name=metadata",
  })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reference",
  })
  reference?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=source",
  })
  source?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=startTime;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  startTime?: Date;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_time;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  startTimeDeprecated?: Date;
}

export class CountTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CountTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: CountTransactionsQueryParams;
}

export class CountTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
