import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ListAllConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectorsResponse?: shared.ConnectorsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}