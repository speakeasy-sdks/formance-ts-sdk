import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TransactionData } from "./transactiondata";
import { Expose, Type } from "class-transformer";


export class Transactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TransactionData })
  @Expose({ name: "transactions" })
  @Type(() => TransactionData)
  transactions: TransactionData[];
}