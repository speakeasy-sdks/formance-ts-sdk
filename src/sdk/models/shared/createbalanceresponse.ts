import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Balance } from "./balance";
import { Expose, Type } from "class-transformer";

export class CreateBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Balance)
  data: Balance;
}
