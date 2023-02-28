import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CurrencyCloudConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "loginID" })
  loginID: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pollingPeriod" })
  pollingPeriod?: string;
}