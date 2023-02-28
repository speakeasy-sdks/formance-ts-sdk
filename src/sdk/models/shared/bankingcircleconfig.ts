import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class BankingCircleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "authorizationEndpoint" })
  authorizationEndpoint: string;

  @SpeakeasyMetadata()
  @Expose({ name: "endpoint" })
  endpoint: string;

  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username: string;
}