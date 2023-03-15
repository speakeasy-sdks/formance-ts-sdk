import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ConfigChangeSecret extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;
}
