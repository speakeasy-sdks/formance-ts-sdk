import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetBalancesAggregatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
  ledger: string;
}

export class GetBalancesAggregatedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;
}

export class GetBalancesAggregatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBalancesAggregatedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBalancesAggregatedQueryParams;
}

export class GetBalancesAggregatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aggregateBalancesResponse?: shared.AggregateBalancesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}