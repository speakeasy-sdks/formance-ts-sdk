# scopes

## Overview

Everything related to Scopes

### Available Operations

* [addTransientScope](#addtransientscope) - Add a transient scope to a scope
* [createScope](#createscope) - Create scope
* [deleteScope](#deletescope) - Delete scope
* [deleteTransientScope](#deletetransientscope) - Delete a transient scope from a scope
* [listScopes](#listscopes) - List scopes
* [readScope](#readscope) - Read scope
* [updateScope](#updatescope) - Update scope

## addTransientScope

Add a transient scope to a scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { AddTransientScopeRequest, AddTransientScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: AddTransientScopeRequest = {
  scopeId: "commodi",
  transientScopeId: "repudiandae",
};

sdk.scopes.addTransientScope(req).then((res: AddTransientScopeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createScope

Create scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateScopeRequest, CreateScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: shared.CreateScopeRequest = {
  label: "quae",
  metadata: {
    "quidem": "molestias",
  },
};

sdk.scopes.createScope(req).then((res: CreateScopeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteScope

Delete scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteScopeRequest, DeleteScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteScopeRequest = {
  scopeId: "excepturi",
};

sdk.scopes.deleteScope(req).then((res: DeleteScopeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteTransientScope

Delete a transient scope from a scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteTransientScopeRequest, DeleteTransientScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DeleteTransientScopeRequest = {
  scopeId: "pariatur",
  transientScopeId: "modi",
};

sdk.scopes.deleteTransientScope(req).then((res: DeleteTransientScopeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listScopes

List Scopes

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListScopesResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.scopes.listScopes().then((res: ListScopesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## readScope

Read scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadScopeRequest, ReadScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ReadScopeRequest = {
  scopeId: "praesentium",
};

sdk.scopes.readScope(req).then((res: ReadScopeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateScope

Update scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateScopeRequest, UpdateScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: UpdateScopeRequest = {
  updateScopeRequest: {
    label: "rem",
    metadata: {
      "quasi": "repudiandae",
      "sint": "veritatis",
      "itaque": "incidunt",
      "enim": "consequatur",
    },
  },
  scopeId: "est",
};

sdk.scopes.updateScope(req).then((res: UpdateScopeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
