import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class RunScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ledger" })
  ledger: string;
}

export class RunScriptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview" })
  preview?: boolean;
}

export class RunScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunScriptPathParams;

  @SpeakeasyMetadata()
  queryParams: RunScriptQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Script;
}

export class RunScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scriptResponse?: shared.ScriptResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}