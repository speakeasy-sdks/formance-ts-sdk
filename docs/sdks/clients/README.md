# clients

### Available Operations

* [addScopeToClient](#addscopetoclient) - Add scope to client
* [createClient](#createclient) - Create client
* [createSecret](#createsecret) - Add a secret to a client
* [deleteClient](#deleteclient) - Delete client
* [deleteScopeFromClient](#deletescopefromclient) - Delete scope from client
* [deleteSecret](#deletesecret) - Delete a secret from a client
* [listClients](#listclients) - List clients
* [readClient](#readclient) - Read client
* [updateClient](#updateclient) - Update client

## addScopeToClient

Add scope to client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { AddScopeToClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.addScopeToClient({
  clientId: "corporis",
  scopeId: "explicabo",
}).then((res: AddScopeToClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AddScopeToClientRequest](../../models/operations/addscopetoclientrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AddScopeToClientResponse](../../models/operations/addscopetoclientresponse.md)>**


## createClient

Create client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.createClient({
  description: "nobis",
  metadata: {
    "omnis": "nemo",
    "minima": "excepturi",
  },
  name: "Charlene Nicolas",
  postLogoutRedirectUris: [
    "mollitia",
  ],
  public: false,
  redirectUris: [
    "culpa",
  ],
  trusted: false,
}).then((res: CreateClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateClientRequest](../../models/shared/createclientrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateClientResponse](../../models/operations/createclientresponse.md)>**


## createSecret

Add a secret to a client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateSecretResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.createSecret({
  createSecretRequest: {
    metadata: {
      "repellat": "mollitia",
    },
    name: "Francis Jerde",
  },
  clientId: "velit",
}).then((res: CreateSecretResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateSecretRequest](../../models/operations/createsecretrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateSecretResponse](../../models/operations/createsecretresponse.md)>**


## deleteClient

Delete client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.deleteClient({
  clientId: "error",
}).then((res: DeleteClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteClientRequest](../../models/operations/deleteclientrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteClientResponse](../../models/operations/deleteclientresponse.md)>**


## deleteScopeFromClient

Delete scope from client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteScopeFromClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.deleteScopeFromClient({
  clientId: "quia",
  scopeId: "quis",
}).then((res: DeleteScopeFromClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteScopeFromClientRequest](../../models/operations/deletescopefromclientrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteScopeFromClientResponse](../../models/operations/deletescopefromclientresponse.md)>**


## deleteSecret

Delete a secret from a client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteSecretResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.deleteSecret({
  clientId: "vitae",
  secretId: "laborum",
}).then((res: DeleteSecretResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteSecretRequest](../../models/operations/deletesecretrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteSecretResponse](../../models/operations/deletesecretresponse.md)>**


## listClients

List clients

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListClientsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.listClients().then((res: ListClientsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListClientsResponse](../../models/operations/listclientsresponse.md)>**


## readClient

Read client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.readClient({
  clientId: "animi",
}).then((res: ReadClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ReadClientRequest](../../models/operations/readclientrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ReadClientResponse](../../models/operations/readclientresponse.md)>**


## updateClient

Update client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.clients.updateClient({
  updateClientRequest: {
    description: "enim",
    metadata: {
      "quo": "sequi",
    },
    name: "Vernon Ondricka Sr.",
    postLogoutRedirectUris: [
      "temporibus",
      "laborum",
      "quasi",
    ],
    public: false,
    redirectUris: [
      "voluptatibus",
      "vero",
      "nihil",
      "praesentium",
    ],
    trusted: false,
  },
  clientId: "voluptatibus",
}).then((res: UpdateClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateClientRequest](../../models/operations/updateclientrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateClientResponse](../../models/operations/updateclientresponse.md)>**

