import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountWithVolumesAndBalances } from "./accountwithvolumesandbalances";
import { Expose, Type } from "class-transformer";


export class AccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => AccountWithVolumesAndBalances)
  data: AccountWithVolumesAndBalances;
}