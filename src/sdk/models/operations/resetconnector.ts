import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ResetConnectorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connector" })
  connector: shared.ConnectorEnum;
}

export class ResetConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetConnectorPathParams;
}

export class ResetConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}