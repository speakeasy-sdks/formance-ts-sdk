import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Wallet } from "./wallet";
import { Expose, Type } from "class-transformer";


export class CreateWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Wallet)
  data: Wallet;
}