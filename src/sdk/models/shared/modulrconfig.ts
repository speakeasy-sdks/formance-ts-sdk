import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ModulrConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "apiSecret" })
  apiSecret: string;

  @SpeakeasyMetadata()
  @Expose({ name: "endpoint" })
  endpoint?: string;
}
