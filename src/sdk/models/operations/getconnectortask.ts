/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetConnectorTaskRequest extends SpeakeasyBase {
  /**
   * The name of the connector.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connector",
  })
  connector: shared.ConnectorEnum;

  /**
   * The task ID.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=taskId",
  })
  taskId: string;
}

export class GetConnectorTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  taskResponse?: shared.TaskResponse;
}
