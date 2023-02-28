import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ReadUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export class ReadUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReadUserPathParams;
}

export class ReadUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  readUserResponse?: shared.ReadUserResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}