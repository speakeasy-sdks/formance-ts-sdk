import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class AddMetadataOnTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
  ledger: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=txid" })
  txid: number;
}

export class AddMetadataOnTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddMetadataOnTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;
}

export class AddMetadataOnTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}