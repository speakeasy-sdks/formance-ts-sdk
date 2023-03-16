import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class CreditWalletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  creditWalletRequest?: shared.CreditWalletRequest;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class CreditWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  walletsErrorResponse?: shared.WalletsErrorResponse;
}
