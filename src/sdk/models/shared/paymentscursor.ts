import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Payment } from "./payment";
import { Expose, Type } from "class-transformer";


export class PaymentsCursorCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Payment })
  @Expose({ name: "data" })
  @Type(() => Payment)
  data: Payment[];

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

export class PaymentsCursor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cursor" })
  @Type(() => PaymentsCursorCursor)
  cursor: PaymentsCursorCursor;
}