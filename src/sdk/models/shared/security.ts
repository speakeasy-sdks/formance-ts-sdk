import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  authorization: string;
}
