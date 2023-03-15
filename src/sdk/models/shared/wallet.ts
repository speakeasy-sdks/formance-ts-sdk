import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class Wallet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ledger" })
  ledger: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
