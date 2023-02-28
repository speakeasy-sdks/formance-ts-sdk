import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ReadStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
  ledger: string;
}

export class ReadStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReadStatsPathParams;
}

export class ReadStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statsResponse?: shared.StatsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}