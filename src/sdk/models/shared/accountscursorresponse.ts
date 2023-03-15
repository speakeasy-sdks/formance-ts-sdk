import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Account } from "./account";
import { Expose, Type } from "class-transformer";

export class AccountsCursorResponseCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Account })
  @Expose({ name: "data" })
  @Type(() => Account)
  data: Account[];

  @SpeakeasyMetadata()
  @Expose({ name: "hasMore" })
  hasMore: boolean;

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

export class AccountsCursorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => AccountsCursorResponseCursor)
  cursor: AccountsCursorResponseCursor;
}
