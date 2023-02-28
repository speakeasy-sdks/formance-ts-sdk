import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorsEnumEnum } from "./errorsenumenum";
import { Transaction } from "./transaction";
import { Expose, Type } from "class-transformer";


export class ScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorCode" })
  errorCode?: ErrorsEnumEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "transaction" })
  @Type(() => Transaction)
  transaction?: Transaction;
}