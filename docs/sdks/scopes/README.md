# Scopes
(*scopes*)

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
import { AddTransientScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.scopes.addTransientScope({
  scopeId: "executive Soul",
  transientScopeId: "Keyboard neural tan",
}).then((res: AddTransientScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AddTransientScopeRequest](../../models/operations/addtransientscoperequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AddTransientScopeResponse](../../models/operations/addtransientscoperesponse.md)>**


## createScope

Create scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.scopes.createScope({
  label: "neural Sunrise",
  metadata: {
    "vero": "deposit",
  },
}).then((res: CreateScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateScopeRequest](../../models/shared/createscoperequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateScopeResponse](../../models/operations/createscoperesponse.md)>**


## deleteScope

Delete scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.scopes.deleteScope({
  scopeId: "impedit Bronze",
}).then((res: DeleteScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteScopeRequest](../../models/operations/deletescoperequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteScopeResponse](../../models/operations/deletescoperesponse.md)>**


## deleteTransientScope

Delete a transient scope from a scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DeleteTransientScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.scopes.deleteTransientScope({
  scopeId: "billion Chips",
  transientScopeId: "Account untidy haptic",
}).then((res: DeleteTransientScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteTransientScopeRequest](../../models/operations/deletetransientscoperequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteTransientScopeResponse](../../models/operations/deletetransientscoperesponse.md)>**


## listScopes

List Scopes

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListScopesResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.scopes.listScopes().then((res: ListScopesResponse) => {
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

**Promise<[operations.ListScopesResponse](../../models/operations/listscopesresponse.md)>**


## readScope

Read scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.scopes.readScope({
  scopeId: "Internal Credit Hermaphrodite",
}).then((res: ReadScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ReadScopeRequest](../../models/operations/readscoperequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ReadScopeResponse](../../models/operations/readscoperesponse.md)>**


## updateScope

Update scope

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateScopeResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.scopes.updateScope({
  updateScopeRequest: {
    label: "East South Luxurious",
    metadata: {
      "temporibus": "meh",
    },
  },
  scopeId: "handcuff Xenon Timmy",
}).then((res: UpdateScopeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UpdateScopeRequest](../../models/operations/updatescoperequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateScopeResponse](../../models/operations/updatescoperesponse.md)>**

