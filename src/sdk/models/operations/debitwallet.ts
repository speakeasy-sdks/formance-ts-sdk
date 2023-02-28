import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DebitWalletPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class DebitWalletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DebitWalletPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.DebitWalletRequest;
}

export class DebitWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  debitWalletResponse?: shared.DebitWalletResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  walletsErrorResponse?: shared.WalletsErrorResponse;
}