# transactions

## Overview

Everything related to Transactions

### Available Operations

* [createTransactions](#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [countTransactions](#counttransactions) - Count the transactions from a ledger
* [createTransaction](#createtransaction) - Create a new transaction to a ledger
* [getTransaction](#gettransaction) - Get transaction from a ledger by its ID
* [listTransactions](#listtransactions) - List transactions from a ledger
* [revertTransaction](#reverttransaction) - Revert a ledger transaction by its ID

## createTransactions

Create a new batch of transactions to a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.createTransactions({
  transactions: {
    transactions: [
      {
        metadata: {
          "quae": "ipsum",
          "quidem": "molestias",
          "excepturi": "pariatur",
          "modi": "praesentium",
        },
        postings: [
          {
            amount: 100,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
          {
            amount: 100,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
          {
            amount: 100,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        timestamp: new Date("2022-09-20T03:14:35.704Z"),
      },
      {
        metadata: {
          "sint": "veritatis",
          "itaque": "incidunt",
          "enim": "consequatur",
          "est": "quibusdam",
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
        timestamp: new Date("2021-07-27T01:56:50.693Z"),
      },
    ],
  },
  ledger: "ledger001",
}).then((res: CreateTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateTransactionsRequest](../../models/operations/createtransactionsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateTransactionsResponse](../../models/operations/createtransactionsresponse.md)>**


## addMetadataOnTransaction

Set the metadata of a transaction by its ID

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { AddMetadataOnTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.addMetadataOnTransaction({
  requestBody: {
    "labore": "modi",
    "qui": "aliquid",
    "cupiditate": "quos",
    "perferendis": "magni",
  },
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
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.countTransactions({
  account: "users:001",
  destination: "users:001",
  endTime: new Date("2021-11-22T01:26:35.048Z"),
  endTimeDeprecated: new Date("2022-11-08T13:10:11.700Z"),
  ledger: "ledger001",
  metadata: {},
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2021-11-11T04:17:07.569Z"),
  startTimeDeprecated: new Date("2022-04-19T03:15:40.816Z"),
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
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.createTransaction({
  postTransaction: {
    metadata: {
      "labore": "delectus",
      "eum": "non",
      "eligendi": "sint",
    },
    postings: [
      {
        amount: 100,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
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
    timestamp: new Date("2021-03-17T21:24:26.606Z"),
  },
  ledger: "ledger001",
  preview: true,
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
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

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
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.transactions.listTransactions({
  account: "users:001",
  after: "1234",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  destination: "users:001",
  endTime: new Date("2021-09-21T14:06:09.271Z"),
  endTimeDeprecated: new Date("2022-02-09T13:58:59.361Z"),
  ledger: "ledger001",
  metadata: {},
  pageSize: 952749,
  pageSizeDeprecated: 680056,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2022-07-21T01:01:39.776Z"),
  startTimeDeprecated: new Date("2020-01-25T11:09:22.009Z"),
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
import { ErrorsEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

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

