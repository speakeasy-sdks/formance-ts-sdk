import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LedgerStorage } from "./ledgerstorage";
import { Expose, Type } from "class-transformer";

export class Config extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "storage" })
  @Type(() => LedgerStorage)
  storage: LedgerStorage;
}
