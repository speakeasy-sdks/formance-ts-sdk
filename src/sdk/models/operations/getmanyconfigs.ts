import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetManyConfigsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=endpoint",
  })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}

export class GetManyConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetManyConfigsQueryParams;
}

export class GetManyConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configsResponse?: shared.ConfigsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
