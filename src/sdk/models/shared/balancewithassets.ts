import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class BalanceWithAssets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "assets" })
  assets: Record<string, number>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}