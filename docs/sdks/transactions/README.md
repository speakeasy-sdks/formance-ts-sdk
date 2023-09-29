# Transactions
(*transactions*)

### Available Operations

* [addMetadataOnTransaction](#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [countTransactions](#counttransactions) - Count the transactions from a ledger
* [createTransaction](#createtransaction) - Create a new transaction to a ledger
* [getTransaction](#gettransaction) - Get transaction from a ledger by its ID
* [listTransactions](#listtransactions) - List transactions from a ledger
* [revertTransaction](#reverttransaction) - Revert a ledger transaction by its ID

## addMetadataOnTransaction

Set the metadata of a transaction by its ID

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { AddMetadataOnTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.addMetadataOnTransaction({
  idempotencyKey: "Fresh Diesel",
  requestBody: {
    "facere": "Tricycle",
  },
  async: true,
  dryRun: true,
  ledger: "ledger001",
  txid: 1234,
}).then((res: AddMetadataOnTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.AddMetadataOnTransactionRequest](../../models/operations/addmetadataontransactionrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.AddMetadataOnTransactionResponse](../../models/operations/addmetadataontransactionresponse.md)>**


## countTransactions

Count the transactions from a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CountTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.countTransactions({
  account: "users:001",
  destination: "users:001",
  endTime: new Date("2021-07-20T09:59:27.603Z"),
  ledger: "ledger001",
  metadata: {
    "voluptates": "Executive",
  },
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2021-11-01T08:17:00.866Z"),
}).then((res: CountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CountTransactionsRequest](../../models/operations/counttransactionsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CountTransactionsResponse](../../models/operations/counttransactionsresponse.md)>**


## createTransaction

Create a new transaction to a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.createTransaction({
  idempotencyKey: "Ball brr what",
  postTransaction: {
    metadata: {
      "quasi": "strategic",
    },
    postings: [
      {
        amount: 100,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    script: {
      plain: "vars {
    account $user
    }
    send [COIN 10] (
    	source = @world
    	destination = $user
    )
    ",
      vars: {},
    },
    timestamp: new Date("2023-04-27T14:31:29.129Z"),
  },
  async: true,
  dryRun: true,
  ledger: "ledger001",
}).then((res: CreateTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateTransactionRequest](../../models/operations/createtransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateTransactionResponse](../../models/operations/createtransactionresponse.md)>**


## getTransaction

Get transaction from a ledger by its ID

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.getTransaction({
  ledger: "ledger001",
  txid: 1234,
}).then((res: GetTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTransactionRequest](../../models/operations/gettransactionrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTransactionResponse](../../models/operations/gettransactionresponse.md)>**


## listTransactions

List transactions from a ledger, sorted by txid in descending order.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.listTransactions({
  account: "users:001",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  destination: "users:001",
  endTime: new Date("2022-09-08T16:09:19.098Z"),
  ledger: "ledger001",
  metadata: {
    "alias": "District",
  },
  pageSize: 71007,
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2022-09-12T07:36:38.262Z"),
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListTransactionsResponse](../../models/operations/listtransactionsresponse.md)>**


## revertTransaction

Revert a ledger transaction by its ID

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { RevertTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.revertTransaction({
  ledger: "ledger001",
  txid: 1234,
}).then((res: RevertTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.RevertTransactionRequest](../../models/operations/reverttransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.RevertTransactionResponse](../../models/operations/reverttransactionresponse.md)>**

