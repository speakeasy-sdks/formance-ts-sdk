import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentMetadataChangelog } from "./paymentmetadatachangelog";
import { Expose, Type } from "class-transformer";


export class PaymentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "changelog" })
  @Type(() => PaymentMetadataChangelog)
  changelog?: PaymentMetadataChangelog;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}