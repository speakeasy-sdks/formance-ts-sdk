import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConfigInfo } from "./configinfo";
import { Expose, Type } from "class-transformer";

export class ConfigInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => ConfigInfo)
  data: ConfigInfo;
}
