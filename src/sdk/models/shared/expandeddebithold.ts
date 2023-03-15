import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ExpandedDebitHold extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "destination" })
  destination?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "originalAmount" })
  originalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "remaining" })
  remaining: number;

  @SpeakeasyMetadata()
  @Expose({ name: "walletID" })
  walletID: string;
}
