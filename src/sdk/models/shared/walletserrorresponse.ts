import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum WalletsErrorResponseErrorCodeEnum {
  Validation = "VALIDATION",
}

export class WalletsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errorCode" })
  errorCode: WalletsErrorResponseErrorCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage: string;
}
