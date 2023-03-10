import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Transaction } from "./transaction";
import { Expose, Type } from "class-transformer";


export class TransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Transaction })
  @Expose({ name: "data" })
  @Type(() => Transaction)
  data: Transaction[];
}