import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Payment } from "./payment";
import { Expose, Type } from "class-transformer";

export class PaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Payment)
  data: Payment;
}
