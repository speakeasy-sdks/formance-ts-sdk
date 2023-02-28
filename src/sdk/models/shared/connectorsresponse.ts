import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectorEnum } from "./connectorenum";
import { Expose, Type } from "class-transformer";


export class ConnectorsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider?: ConnectorEnum;
}

export class ConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConnectorsResponseData })
  @Expose({ name: "data" })
  @Type(() => ConnectorsResponseData)
  data: ConnectorsResponseData[];
}