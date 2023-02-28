import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class CreateBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class CreateBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBalancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CreateBalanceRequest;
}

export class CreateBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBalanceResponse?: shared.CreateBalanceResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  walletsErrorResponse?: shared.WalletsErrorResponse;
}