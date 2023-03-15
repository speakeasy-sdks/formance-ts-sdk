import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LedgerStorage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "driver" })
  driver: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ledgers" })
  ledgers: string[];
}
