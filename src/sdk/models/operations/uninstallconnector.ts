import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class UninstallConnectorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connector",
  })
  connector: shared.ConnectorEnum;
}

export class UninstallConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UninstallConnectorPathParams;
}

export class UninstallConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
