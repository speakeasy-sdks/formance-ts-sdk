# mapping

## Overview

Everything related to Mapping

### Available Operations

* [getMapping](#getmapping) - Get the mapping of a ledger
* [updateMapping](#updatemapping) - Update the mapping of a ledger

## getMapping

Get the mapping of a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetMappingRequest, GetMappingResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetMappingRequest = {
  ledger: "ledger001",
};

sdk.mapping.getMapping(req).then((res: GetMappingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateMapping

Update the mapping of a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateMappingRequest, UpdateMappingResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: UpdateMappingRequest = {
  mapping: {
    contracts: [
      {
        account: "users:001",
        expr: {
          "nobis": "enim",
        },
      },
      {
        account: "users:001",
        expr: {
          "nemo": "minima",
          "excepturi": "accusantium",
          "iure": "culpa",
        },
      },
    ],
  },
  ledger: "ledger001",
};

sdk.mapping.updateMapping(req).then((res: UpdateMappingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
