# accounts

## Overview

Everything related to Accounts

### Available Operations

* [addMetadataToAccount](#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](#countaccounts) - Count the accounts from a ledger
* [getAccount](#getaccount) - Get account by its address
* [listAccounts](#listaccounts) - List accounts from a ledger

## addMetadataToAccount

Add metadata to an account

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { AddMetadataToAccountRequest, AddMetadataToAccountResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: AddMetadataToAccountRequest = {
  requestBody: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  address: "users:001",
  ledger: "ledger001",
};

sdk.accounts.addMetadataToAccount(req).then((res: AddMetadataToAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## countAccounts

Count the accounts from a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CountAccountsRequest, CountAccountsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CountAccountsRequest = {
  address: "users:.+",
  ledger: "ledger001",
  metadata: {
    "vel": "error",
    "deserunt": "suscipit",
    "iure": "magnam",
    "debitis": "ipsa",
  },
};

sdk.accounts.countAccounts(req).then((res: CountAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAccount

Get account by its address

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetAccountRequest, GetAccountResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetAccountRequest = {
  address: "users:001",
  ledger: "ledger001",
};

sdk.accounts.getAccount(req).then((res: GetAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAccounts

List accounts from a ledger, sorted by address in descending order.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListAccountsBalanceOperatorEnum, ListAccountsRequest, ListAccountsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ListAccountsRequest = {
  address: "users:.+",
  after: "users:003",
  balance: 2400,
  balanceOperator: ListAccountsBalanceOperatorEnum.Gte,
  balanceOperatorDeprecated: ListAccountsBalanceOperatorEnum.Gte,
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  ledger: "ledger001",
  metadata: {
    "tempora": "suscipit",
    "molestiae": "minus",
    "placeat": "voluptatum",
    "iusto": "excepturi",
  },
  pageSize: 392785,
  pageSizeDeprecated: 925597,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
};

sdk.accounts.listAccounts(req).then((res: ListAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
