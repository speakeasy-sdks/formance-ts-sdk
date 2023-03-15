import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class DeleteScopeFromClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=clientId",
  })
  clientId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=scopeId",
  })
  scopeId: string;
}

export class DeleteScopeFromClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScopeFromClientPathParams;
}

export class DeleteScopeFromClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
