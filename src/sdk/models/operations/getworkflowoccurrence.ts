import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetWorkflowOccurrenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=flowId",
  })
  flowId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=runId",
  })
  runId: string;
}

export class GetWorkflowOccurrenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  getWorkflowOccurrenceResponse?: shared.GetWorkflowOccurrenceResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
