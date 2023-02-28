import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class RevertTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
  ledger: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: number;
}

export class RevertTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevertTransactionPathParams;
}

export class RevertTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionResponse?: shared.TransactionResponse;
}