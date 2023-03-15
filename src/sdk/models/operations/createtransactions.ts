import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class CreateTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ledger",
  })
  ledger: string;
}

export class CreateTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTransactionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Transactions;
}

export class CreateTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  transactionsResponse?: shared.TransactionsResponse;
}
