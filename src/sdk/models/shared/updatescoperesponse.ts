import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Scope } from "./scope";
import { Expose, Type } from "class-transformer";

export class UpdateScopeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Scope)
  data?: Scope;
}
