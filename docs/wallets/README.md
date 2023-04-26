# wallets

## Overview

Everything related to Wallets

### Available Operations

* [confirmHold](#confirmhold) - Confirm a hold
* [createBalance](#createbalance) - Create a balance
* [createWallet](#createwallet) - Create a new wallet
* [creditWallet](#creditwallet) - Credit a wallet
* [debitWallet](#debitwallet) - Debit a wallet
* [getBalance](#getbalance) - Get detailed balance
* [getHold](#gethold) - Get a hold
* [getHolds](#getholds) - Get all holds for a wallet
* [getTransactions](#gettransactions)
* [getWallet](#getwallet) - Get a wallet
* [listBalances](#listbalances) - List balances of a wallet
* [listWallets](#listwallets) - List all wallets
* [updateWallet](#updatewallet) - Update a wallet
* [voidHold](#voidhold) - Cancel a hold
* [walletsgetServerInfo](#walletsgetserverinfo) - Get server info

## confirmHold

Confirm a hold

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ConfirmHoldRequest, ConfirmHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ConfirmHoldRequest = {
  confirmHoldRequest: {
    amount: 100,
    final: true,
  },
  holdId: "iure",
};

sdk.wallets.confirmHold(req).then((res: ConfirmHoldResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createBalance

Create a balance

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateBalanceRequest, CreateBalanceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CreateBalanceRequest = {
  createBalanceRequest: {
    name: "Doyle Gibson",
  },
  id: "b711e5b7-fd2e-4d02-8921-cddc692601fb",
};

sdk.wallets.createBalance(req).then((res: CreateBalanceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createWallet

Create a new wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateWalletRequest, CreateWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: shared.CreateWalletRequest = {
  metadata: {
    "voluptate": "autem",
    "nam": "eaque",
  },
  name: "Dr. Herman Wolf",
};

sdk.wallets.createWallet(req).then((res: CreateWalletResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## creditWallet

Credit a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreditWalletRequest, CreditWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CreditWalletRequest = {
  creditWalletRequest: {
    amount: {
      amount: 11714,
      asset: "cumque",
    },
    balance: "corporis",
    metadata: {
      "libero": "nobis",
      "dolores": "quis",
      "totam": "dignissimos",
      "eaque": "quis",
    },
    reference: "nesciunt",
    sources: [
      {
        identifier: "dolores",
        type: "minus",
      },
    ],
  },
  id: "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48",
};

sdk.wallets.creditWallet(req).then((res: CreditWalletResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## debitWallet

Debit a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DebitWalletRequest, DebitWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: DebitWalletRequest = {
  debitWalletRequest: {
    amount: {
      amount: 398221,
      asset: "dolorem",
    },
    balances: [
      "dolor",
    ],
    description: "qui",
    destination: {
      identifier: "hic",
      type: "excepturi",
    },
    metadata: {
      "voluptate": "dignissimos",
      "reiciendis": "amet",
      "dolorum": "numquam",
    },
    pending: false,
  },
  id: "100674eb-f692-480d-9ba7-7a89ebf737ae",
};

sdk.wallets.debitWallet(req).then((res: DebitWalletResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBalance

Get detailed balance

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetBalanceRequest, GetBalanceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetBalanceRequest = {
  balanceName: "eius",
  id: "203ce5e6-a95d-48a0-9446-ce2af7a73cf3",
};

sdk.wallets.getBalance(req).then((res: GetBalanceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getHold

Get a hold

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetHoldRequest, GetHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetHoldRequest = {
  holdID: "tempore",
};

sdk.wallets.getHold(req).then((res: GetHoldResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getHolds

Get all holds for a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetHoldsRequest, GetHoldsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetHoldsRequest = {
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  metadata: {
    "numquam": "enim",
    "dolorem": "sapiente",
    "totam": "nihil",
    "sit": "expedita",
  },
  pageSize: 207470,
  walletID: "sed",
};

sdk.wallets.getHolds(req).then((res: GetHoldsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getTransactions

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetTransactionsRequest, GetTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetTransactionsRequest = {
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 424685,
  walletId: "libero",
};

sdk.wallets.getTransactions(req).then((res: GetTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getWallet

Get a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWalletRequest, GetWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetWalletRequest = {
  id: "5a73429c-db1a-4842-abb6-79d2322715bf",
};

sdk.wallets.getWallet(req).then((res: GetWalletResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listBalances

List balances of a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListBalancesRequest, ListBalancesResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ListBalancesRequest = {
  id: "0cbb1e31-b8b9-40f3-843a-1108e0adcf4b",
};

sdk.wallets.listBalances(req).then((res: ListBalancesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listWallets

List all wallets

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListWalletsRequest, ListWalletsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ListWalletsRequest = {
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  metadata: {
    "qui": "quae",
    "laudantium": "odio",
    "occaecati": "voluptatibus",
  },
  name: "Ignacio Moen",
  pageSize: 961571,
};

sdk.wallets.listWallets(req).then((res: ListWalletsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateWallet

Update a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateWalletRequest, UpdateWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: UpdateWalletRequest = {
  requestBody: {
    metadata: {
      "consectetur": "vero",
      "tenetur": "dignissimos",
    },
  },
  id: "fbc7abd7-4dd3-49c0-b5d2-cff7c70a4562",
};

sdk.wallets.updateWallet(req).then((res: UpdateWalletResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## voidHold

Cancel a hold

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { VoidHoldRequest, VoidHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: VoidHoldRequest = {
  holdId: "vel",
};

sdk.wallets.voidHold(req).then((res: VoidHoldResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## walletsgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { WalletsgetServerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.wallets.walletsgetServerInfo().then((res: WalletsgetServerInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
