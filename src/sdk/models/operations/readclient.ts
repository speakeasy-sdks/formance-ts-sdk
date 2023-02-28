import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ReadClientPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}

export class ReadClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReadClientPathParams;
}

export class ReadClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  readClientResponse?: shared.ReadClientResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}