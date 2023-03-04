import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class CreateTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
  ledger: string;
}

export class CreateTransactionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;
}

export class CreateTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTransactionPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateTransactionQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostTransaction;
}

export class CreateTransactionResponse extends SpeakeasyBase {
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