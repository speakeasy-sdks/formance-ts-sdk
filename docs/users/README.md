# users

## Overview

Everything related to Users

### Available Operations

* [listUsers](#listusers) - List users
* [readUser](#readuser) - Read user

## listUsers

List users

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListUsersResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.users.listUsers().then((res: ListUsersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## readUser

Read user

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadUserRequest, ReadUserResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ReadUserRequest = {
  userId: "quasi",
};

sdk.users.readUser(req).then((res: ReadUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
