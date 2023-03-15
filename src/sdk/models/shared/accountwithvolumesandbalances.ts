import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AccountWithVolumesAndBalances extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  address: string;

  @SpeakeasyMetadata()
  @Expose({ name: "balances" })
  balances?: Record<string, number>;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "volumes" })
  volumes?: Record<string, Record<string, number>>;
}
