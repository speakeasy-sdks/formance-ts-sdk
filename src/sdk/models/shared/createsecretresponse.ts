import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Secret } from "./secret";
import { Expose, Type } from "class-transformer";


export class CreateSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Secret)
  data?: Secret;
}