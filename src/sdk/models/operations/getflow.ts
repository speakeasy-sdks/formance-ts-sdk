import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetFlowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flowId" })
  flowId: string;
}

export class GetFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFlowPathParams;
}

export class GetFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  getWorkflowResponse?: shared.GetWorkflowResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}