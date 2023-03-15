import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class UpdateScopePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=scopeId",
  })
  scopeId: string;
}

export class UpdateScopeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateScopePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateScopeRequest;
}

export class UpdateScopeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  updateScopeResponse?: shared.UpdateScopeResponse;
}
