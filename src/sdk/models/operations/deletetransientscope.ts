import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DeleteTransientScopePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scopeId" })
  scopeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transientScopeId" })
  transientScopeId: string;
}

export class DeleteTransientScopeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTransientScopePathParams;
}

export class DeleteTransientScopeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}