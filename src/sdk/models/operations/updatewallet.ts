import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateWalletPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class UpdateWalletRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;
}

export class UpdateWalletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateWalletPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateWalletRequestBody;
}

export class UpdateWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  walletsErrorResponse?: shared.WalletsErrorResponse;
}
