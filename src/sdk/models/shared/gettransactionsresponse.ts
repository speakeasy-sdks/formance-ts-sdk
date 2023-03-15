import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WalletsTransaction } from "./walletstransaction";
import { Expose, Type } from "class-transformer";

export class GetTransactionsResponseCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WalletsTransaction })
  @Expose({ name: "data" })
  @Type(() => WalletsTransaction)
  data: WalletsTransaction[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasMore" })
  hasMore?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;
}

export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => GetTransactionsResponseCursor)
  cursor: GetTransactionsResponseCursor;
}
