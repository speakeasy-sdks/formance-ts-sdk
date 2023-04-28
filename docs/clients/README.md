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
import { AddScopeToClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.addScopeToClient({
  clientId: "temporibus",
  scopeId: "ab",
}).then((res: AddScopeToClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createClient

Create client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.createClient({
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
}).then((res: CreateClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createSecret

Add a secret to a client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateSecretResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.createSecret({
  createSecretRequest: {
    metadata: {
      "nam": "officia",
    },
    name: "Wayne Lind",
  },
  clientId: "totam",
}).then((res: CreateSecretResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteClient

Delete client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.deleteClient({
  clientId: "beatae",
}).then((res: DeleteClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteScopeFromClient

Delete scope from client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteScopeFromClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.deleteScopeFromClient({
  clientId: "commodi",
  scopeId: "molestiae",
}).then((res: DeleteScopeFromClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteSecret

Delete a secret from a client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteSecretResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.deleteSecret({
  clientId: "modi",
  secretId: "qui",
}).then((res: DeleteSecretResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.listClients().then((res: ListClientsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## readClient

Read client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.readClient({
  clientId: "impedit",
}).then((res: ReadClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateClient

Update client

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateClientResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.clients.updateClient({
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
}).then((res: UpdateClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
