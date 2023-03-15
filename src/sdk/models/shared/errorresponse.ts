import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorsEnumEnum } from "./errorsenumenum";
import { Expose } from "class-transformer";

export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorCode" })
  errorCode?: ErrorsEnumEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;
}
