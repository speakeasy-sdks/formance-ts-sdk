import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BalanceWithAssets } from "./balancewithassets";
import { Expose, Type } from "class-transformer";

export class GetBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => BalanceWithAssets)
  data: BalanceWithAssets;
}
