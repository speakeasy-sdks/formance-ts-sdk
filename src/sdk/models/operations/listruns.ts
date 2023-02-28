import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ListRunsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flowId" })
  flowId: string;
}

export class ListRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListRunsPathParams;
}

export class ListRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  listRunsResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}