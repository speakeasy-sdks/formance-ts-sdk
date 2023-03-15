import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Monetary } from "./monetary";
import { Expose, Type } from "class-transformer";

export class CreditWalletRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  @Type(() => Monetary)
  amount: Monetary;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sources" })
  sources: any[];
}
