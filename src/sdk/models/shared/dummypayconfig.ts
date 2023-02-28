import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DummyPayConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "directory" })
  directory: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fileGenerationPeriod" })
  fileGenerationPeriod?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filePollingPeriod" })
  filePollingPeriod?: string;
}