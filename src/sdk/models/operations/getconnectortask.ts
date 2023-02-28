import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetConnectorTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connector" })
  connector: shared.ConnectorEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}

export class GetConnectorTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConnectorTaskPathParams;
}

export class GetConnectorTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskResponse?: shared.TaskResponse;
}