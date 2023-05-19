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
import { GetMappingResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.mapping.getMapping({
  ledger: "ledger001",
}).then((res: GetMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMapping

Update the mapping of a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateMappingResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.mapping.updateMapping({
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
}).then((res: UpdateMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
