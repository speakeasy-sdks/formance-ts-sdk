import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ChangeConfigSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class ChangeConfigSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeConfigSecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ConfigChangeSecret;
}

export class ChangeConfigSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configResponse?: shared.ConfigResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}