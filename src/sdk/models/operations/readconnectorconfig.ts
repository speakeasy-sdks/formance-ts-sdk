import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class ReadConnectorConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connector",
  })
  connector: shared.ConnectorEnum;
}

export class ReadConnectorConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReadConnectorConfigPathParams;
}

export class ReadConnectorConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectorConfigResponse?: shared.ConnectorConfigResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
