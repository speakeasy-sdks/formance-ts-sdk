import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ConfirmHoldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hold_id" })
  holdId: string;
}

export class ConfirmHoldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfirmHoldPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ConfirmHoldRequest;
}

export class ConfirmHoldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  walletsErrorResponse?: shared.WalletsErrorResponse;
}