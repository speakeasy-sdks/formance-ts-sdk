import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class InstallConnectorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connector",
  })
  connector: shared.ConnectorEnum;
}

export class InstallConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstallConnectorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}

export class InstallConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
