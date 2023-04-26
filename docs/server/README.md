# server

## Overview

Everything related to Server

### Available Operations

* [getInfo](#getinfo) - Show server information

## getInfo

Show server information

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.server.getInfo().then((res: GetInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
