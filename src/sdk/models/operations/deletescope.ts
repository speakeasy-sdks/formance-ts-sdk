import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DeleteScopePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scopeId" })
  scopeId: string;
}

export class DeleteScopeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScopePathParams;
}

export class DeleteScopeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}