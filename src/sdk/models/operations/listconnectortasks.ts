import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ListConnectorTasksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connector" })
  connector: shared.ConnectorEnum;
}

export class ListConnectorTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}

export class ListConnectorTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListConnectorTasksPathParams;

  @SpeakeasyMetadata()
  queryParams: ListConnectorTasksQueryParams;
}

export class ListConnectorTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tasksCursor?: shared.TasksCursor;
}