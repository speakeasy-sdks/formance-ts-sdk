# clients

## Overview

Everything related to Clients

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
import { AddScopeToClientRequest, AddScopeToClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: AddScopeToClientRequest = {
  clientId: "temporibus",
  scopeId: "ab",
};

sdk.clients.addScopeToClient(req).then((res: AddScopeToClientResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createClient

Create client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateClientRequest, CreateClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: shared.CreateClientRequest = {
  description: "quis",
  metadata: {
    "deserunt": "perferendis",
  },
  name: "Estelle Will",
  postLogoutRedirectUris: [
    "at",
    "maiores",
    "molestiae",
    "quod",
  ],
  public: false,
  redirectUris: [
    "esse",
    "totam",
    "porro",
    "dolorum",
  ],
  trusted: false,
};

sdk.clients.createClient(req).then((res: CreateClientResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createSecret

Add a secret to a client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateSecretRequest, CreateSecretResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CreateSecretRequest = {
  createSecretRequest: {
    metadata: {
      "nam": "officia",
    },
    name: "Wayne Lind",
  },
  clientId: "totam",
};

sdk.clients.createSecret(req).then((res: CreateSecretResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteClient

Delete client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteClientRequest, DeleteClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteClientRequest = {
  clientId: "beatae",
};

sdk.clients.deleteClient(req).then((res: DeleteClientResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteScopeFromClient

Delete scope from client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteScopeFromClientRequest, DeleteScopeFromClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteScopeFromClientRequest = {
  clientId: "commodi",
  scopeId: "molestiae",
};

sdk.clients.deleteScopeFromClient(req).then((res: DeleteScopeFromClientResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteSecret

Delete a secret from a client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteSecretRequest, DeleteSecretResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteSecretRequest = {
  clientId: "modi",
  secretId: "qui",
};

sdk.clients.deleteSecret(req).then((res: DeleteSecretResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listClients

List clients

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListClientsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.listClients().then((res: ListClientsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## readClient

Read client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadClientRequest, ReadClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ReadClientRequest = {
  clientId: "impedit",
};

sdk.clients.readClient(req).then((res: ReadClientResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateClient

Update client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateClientRequest, UpdateClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: UpdateClientRequest = {
  updateClientRequest: {
    description: "cum",
    metadata: {
      "ipsum": "excepturi",
      "aspernatur": "perferendis",
    },
    name: "Faye Cormier",
    postLogoutRedirectUris: [
      "laboriosam",
      "hic",
      "saepe",
    ],
    public: false,
    redirectUris: [
      "in",
      "corporis",
      "iste",
    ],
    trusted: false,
  },
  clientId: "iure",
};

sdk.clients.updateClient(req).then((res: UpdateClientResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
