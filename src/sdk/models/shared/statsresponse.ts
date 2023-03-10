import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Stats } from "./stats";
import { Expose, Type } from "class-transformer";


export class StatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Stats)
  data: Stats;
}