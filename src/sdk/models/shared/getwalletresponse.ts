import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WalletWithBalances } from "./walletwithbalances";
import { Expose, Type } from "class-transformer";


export class GetWalletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => WalletWithBalances)
  data: WalletWithBalances;
}