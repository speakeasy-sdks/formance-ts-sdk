import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Contract } from "./contract";
import { Expose, Type } from "class-transformer";

export class Mapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Contract })
  @Expose({ name: "contracts" })
  @Type(() => Contract)
  contracts: Contract[];
}
