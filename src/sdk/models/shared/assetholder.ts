import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class AssetHolder extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "assets" })
  assets: Record<string, number>;
}