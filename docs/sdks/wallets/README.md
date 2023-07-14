# wallets

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
* [getWalletSummary](#getwalletsummary) - Get wallet summary
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
  holdId: "hic",
}).then((res: ConfirmHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ConfirmHoldRequest](../../models/operations/confirmholdrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ConfirmHoldResponse](../../models/operations/confirmholdresponse.md)>**


## createBalance

Create a balance

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateBalanceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.createBalance({
  createBalanceRequest: {
    expiresAt: new Date("2021-07-02T12:00:47.197Z"),
    name: "Beatrice Lebsack II",
    priority: 199996,
  },
  id: "202c73d5-fe9b-490c-a890-9b3fe49a8d9c",
}).then((res: CreateBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateBalanceRequest](../../models/operations/createbalancerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateBalanceResponse](../../models/operations/createbalanceresponse.md)>**


## createWallet

Create a new wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.createWallet({
  metadata: {
    "delectus": "quaerat",
    "quos": "aliquid",
    "dolorem": "dolorem",
  },
  name: "Norma Erdman",
}).then((res: CreateWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateWalletRequest](../../models/shared/createwalletrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateWalletResponse](../../models/operations/createwalletresponse.md)>**


## creditWallet

Credit a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreditWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.creditWallet({
  creditWalletRequest: {
    amount: {
      amount: 739551,
      asset: "voluptate",
    },
    balance: "dignissimos",
    metadata: {
      "amet": "dolorum",
      "numquam": "veritatis",
      "ipsa": "ipsa",
      "iure": "odio",
    },
    reference: "quaerat",
    sources: [
      {
        balance: "voluptatibus",
        identifier: "voluptas",
        type: "natus",
      },
      {
        identifier: "atque",
        type: "sit",
      },
      {
        balance: "ab",
        identifier: "soluta",
        type: "dolorum",
      },
      {
        identifier: "voluptate",
        type: "dolorum",
      },
    ],
  },
  id: "89ebf737-ae42-403c-a5e6-a95d8a0d446c",
}).then((res: CreditWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreditWalletRequest](../../models/operations/creditwalletrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreditWalletResponse](../../models/operations/creditwalletresponse.md)>**


## debitWallet

Debit a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { DebitWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.debitWallet({
  debitWalletRequest: {
    amount: {
      amount: 885338,
      asset: "qui",
    },
    balances: [
      "a",
      "esse",
      "harum",
    ],
    description: "iusto",
    destination: {
      identifier: "quisquam",
      type: "tenetur",
    },
    metadata: {
      "tempore": "accusamus",
    },
    pending: false,
  },
  id: "453f870b-326b-45a7-b429-cdb1a8422bb6",
}).then((res: DebitWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DebitWalletRequest](../../models/operations/debitwalletrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DebitWalletResponse](../../models/operations/debitwalletresponse.md)>**


## getBalance

Get detailed balance

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetBalanceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getBalance({
  balanceName: "quam",
  id: "9d232271-5bf0-4cbb-9e31-b8b90f3443a1",
}).then((res: GetBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetBalanceRequest](../../models/operations/getbalancerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetBalanceResponse](../../models/operations/getbalanceresponse.md)>**


## getHold

Get a hold

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getHold({
  holdID: "quae",
}).then((res: GetHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetHoldRequest](../../models/operations/getholdrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetHoldResponse](../../models/operations/getholdresponse.md)>**


## getHolds

Get all holds for a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetHoldsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getHolds({
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  metadata: {
    "quas": "itaque",
  },
  pageSize: 9240,
  walletID: "est",
}).then((res: GetHoldsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetHoldsRequest](../../models/operations/getholdsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetHoldsResponse](../../models/operations/getholdsresponse.md)>**


## getTransactions

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getTransactions({
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 833038,
  walletID: "porro",
}).then((res: GetTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetTransactionsRequest](../../models/operations/gettransactionsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetTransactionsResponse](../../models/operations/gettransactionsresponse.md)>**


## getWallet

Get a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getWallet({
  id: "f4b92187-9fce-4953-b73e-f7fbc7abd74d",
}).then((res: GetWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetWalletRequest](../../models/operations/getwalletrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetWalletResponse](../../models/operations/getwalletresponse.md)>**


## getWalletSummary

Get wallet summary

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWalletSummaryResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getWalletSummary({
  id: "d39c0f5d-2cff-47c7-8a45-626d436813f1",
}).then((res: GetWalletSummaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetWalletSummaryRequest](../../models/operations/getwalletsummaryrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetWalletSummaryResponse](../../models/operations/getwalletsummaryresponse.md)>**


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
  id: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
}).then((res: ListBalancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListBalancesRequest](../../models/operations/listbalancesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListBalancesResponse](../../models/operations/listbalancesresponse.md)>**


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
    "non": "et",
  },
  name: "Neal Schroeder",
  pageSize: 420539,
}).then((res: ListWalletsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListWalletsRequest](../../models/operations/listwalletsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListWalletsResponse](../../models/operations/listwalletsresponse.md)>**


## updateWallet

Update a wallet

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UpdateWalletResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.updateWallet({
  requestBody: {
    metadata: {
      "quas": "assumenda",
      "nulla": "voluptas",
      "libero": "quasi",
      "tempora": "numquam",
    },
  },
  id: "29074747-78a7-4bd4-a6d2-8c10ab3cdca4",
}).then((res: UpdateWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateWalletRequest](../../models/operations/updatewalletrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateWalletResponse](../../models/operations/updatewalletresponse.md)>**


## voidHold

Cancel a hold

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { VoidHoldResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.voidHold({
  holdId: "eos",
}).then((res: VoidHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.VoidHoldRequest](../../models/operations/voidholdrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.VoidHoldResponse](../../models/operations/voidholdresponse.md)>**


## walletsgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { WalletsgetServerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.WalletsgetServerInfoResponse](../../models/operations/walletsgetserverinforesponse.md)>**

