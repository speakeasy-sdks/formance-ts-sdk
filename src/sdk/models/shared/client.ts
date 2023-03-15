import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientSecret } from "./clientsecret";
import { Expose, Type } from "class-transformer";

export class Client extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postLogoutRedirectUris" })
  postLogoutRedirectUris?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "public" })
  public?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "redirectUris" })
  redirectUris?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ elemType: ClientSecret })
  @Expose({ name: "secrets" })
  @Type(() => ClientSecret)
  secrets?: ClientSecret[];

  @SpeakeasyMetadata()
  @Expose({ name: "trusted" })
  trusted?: boolean;
}
