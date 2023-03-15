import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class StripeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pollingPeriod" })
  pollingPeriod?: string;
}
