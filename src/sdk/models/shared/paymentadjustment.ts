import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentStatusEnum } from "./paymentstatusenum";
import { Expose, Transform } from "class-transformer";

export class PaymentAdjustment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "absolute" })
  absolute: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "raw" })
  raw: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PaymentStatusEnum;
}
