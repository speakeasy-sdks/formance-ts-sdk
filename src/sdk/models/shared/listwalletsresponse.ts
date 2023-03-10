import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Wallet } from "./wallet";
import { Expose, Type } from "class-transformer";


export class ListWalletsResponseCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Wallet })
  @Expose({ name: "data" })
  @Type(() => Wallet)
  data: Wallet[];

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

export class ListWalletsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => ListWalletsResponseCursor)
  cursor: ListWalletsResponseCursor;
}