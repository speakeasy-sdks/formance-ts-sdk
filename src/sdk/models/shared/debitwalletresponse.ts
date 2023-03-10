import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Hold } from "./hold";
import { Expose, Type } from "class-transformer";


export class DebitWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Hold)
  data: Hold;
}