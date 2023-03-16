import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class RunWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: Record<string, string>;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=flowId",
  })
  flowId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wait" })
  wait?: boolean;
}

export class RunWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  runWorkflowResponse?: shared.RunWorkflowResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
