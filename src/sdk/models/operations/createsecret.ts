import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class CreateSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}

export class CreateSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CreateSecretRequest;
}

export class CreateSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSecretResponse?: shared.CreateSecretResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}