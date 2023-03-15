import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Monetary } from "./monetary";
import { Expose, Type } from "class-transformer";

export class DebitWalletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  @Type(() => Monetary)
  amount: Monetary;

  @SpeakeasyMetadata()
  @Expose({ name: "balances" })
  balances?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "destination" })
  destination?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "pending" })
  pending?: boolean;
}
