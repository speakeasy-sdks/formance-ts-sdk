import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";


export class ListUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: User })
  @Expose({ name: "data" })
  @Type(() => User)
  data?: User[];
}