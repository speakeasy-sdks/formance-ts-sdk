import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Client } from "./client";
import { Expose, Type } from "class-transformer";


export class ListClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Client })
  @Expose({ name: "data" })
  @Type(() => Client)
  data?: Client[];
}