import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Transaction } from "./transaction";
import { Expose, Type } from "class-transformer";

export class TransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Transaction)
  data: Transaction;
}
