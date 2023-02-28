import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PaymentslistAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];
}

export class PaymentslistAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PaymentslistAccountsQueryParams;
}

export class PaymentslistAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountsCursor?: shared.AccountsCursor;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}