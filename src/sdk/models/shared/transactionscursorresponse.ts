import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Transaction } from "./transaction";
import { Expose, Type } from "class-transformer";

export class TransactionsCursorResponseCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Transaction })
  @Expose({ name: "data" })
  @Type(() => Transaction)
  data: Transaction[];

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

export class TransactionsCursorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => TransactionsCursorResponseCursor)
  cursor: TransactionsCursorResponseCursor;
}
