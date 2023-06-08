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
import { ConfirmHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.confirmHold({
  confirmHoldRequest: {
    amount: 100,
    final: true,
  },
  holdId: "iure",
}).then((res: ConfirmHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createBalance

Create a balance

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateBalanceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.createBalance({
  createBalanceRequest: {
    name: "Doyle Gibson",
  },
  id: "b711e5b7-fd2e-4d02-8921-cddc692601fb",
}).then((res: CreateBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createWallet

Create a new wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.createWallet({
  metadata: {
    "voluptate": "autem",
    "nam": "eaque",
  },
  name: "Dr. Herman Wolf",
}).then((res: CreateWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## creditWallet

Credit a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreditWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.creditWallet({
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
}).then((res: CreditWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## debitWallet

Debit a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DebitWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.debitWallet({
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
}).then((res: DebitWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getBalance

Get detailed balance

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetBalanceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getBalance({
  balanceName: "eius",
  id: "203ce5e6-a95d-48a0-9446-ce2af7a73cf3",
}).then((res: GetBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getHold

Get a hold

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getHold({
  holdID: "tempore",
}).then((res: GetHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getHolds

Get all holds for a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetHoldsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getHolds({
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  metadata: {
    "numquam": "enim",
    "dolorem": "sapiente",
    "totam": "nihil",
    "sit": "expedita",
  },
  pageSize: 207470,
  walletID: "sed",
}).then((res: GetHoldsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getTransactions

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getTransactions({
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 424685,
  walletId: "libero",
}).then((res: GetTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWallet

Get a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getWallet({
  id: "5a73429c-db1a-4842-abb6-79d2322715bf",
}).then((res: GetWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listBalances

List balances of a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListBalancesResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.listBalances({
  id: "0cbb1e31-b8b9-40f3-843a-1108e0adcf4b",
}).then((res: ListBalancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listWallets

List all wallets

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListWalletsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.listWallets({
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  metadata: {
    "qui": "quae",
    "laudantium": "odio",
    "occaecati": "voluptatibus",
  },
  name: "Ignacio Moen",
  pageSize: 961571,
}).then((res: ListWalletsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateWallet

Update a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.updateWallet({
  requestBody: {
    metadata: {
      "consectetur": "vero",
      "tenetur": "dignissimos",
    },
  },
  id: "fbc7abd7-4dd3-49c0-b5d2-cff7c70a4562",
}).then((res: UpdateWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## voidHold

Cancel a hold

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { VoidHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.voidHold({
  holdId: "vel",
}).then((res: VoidHoldResponse) => {
  if (res.statusCode == 200) {
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
import { WalletsErrorResponseErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.walletsgetServerInfo().then((res: WalletsgetServerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
