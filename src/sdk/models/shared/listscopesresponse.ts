import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Scope } from "./scope";
import { Expose, Type } from "class-transformer";


export class ListScopesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Scope })
  @Expose({ name: "data" })
  @Type(() => Scope)
  data?: Scope[];
}