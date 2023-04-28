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
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.transactions.createTransactions({
  transactions: {
    transactions: [
      {
        metadata: {
          "delectus": "eum",
          "non": "eligendi",
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
        timestamp: new Date("2022-05-29T21:42:45.399Z"),
      },
      {
        metadata: {
          "sint": "officia",
          "dolor": "debitis",
          "a": "dolorum",
          "in": "in",
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
          {
            amount: 100,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        timestamp: new Date("2020-11-26T01:41:04.216Z"),
      },
      {
        metadata: {
          "magnam": "cumque",
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
          {
            amount: 100,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        timestamp: new Date("2022-08-09T06:36:34.417Z"),
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

## addMetadataOnTransaction

Set the metadata of a transaction by its ID

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { AddMetadataOnTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.transactions.addMetadataOnTransaction({
  requestBody: {
    "accusamus": "non",
    "occaecati": "enim",
    "accusamus": "delectus",
  },
  ledger: "ledger001",
  txid: 1234,
}).then((res: AddMetadataOnTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## countTransactions

Count the transactions from a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CountTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.transactions.countTransactions({
  account: "users:001",
  destination: "users:001",
  endTime: new Date("2021-10-28T10:05:29.849Z"),
  endTimeDeprecated: new Date("2021-09-06T10:36:33.442Z"),
  ledger: "ledger001",
  metadata: {
    "deleniti": "sapiente",
    "amet": "deserunt",
    "nisi": "vel",
  },
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2021-10-15T07:59:26.631Z"),
  startTimeDeprecated: new Date("2022-12-24T23:52:02.245Z"),
}).then((res: CountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTransaction

Create a new transaction to a ledger

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.transactions.createTransaction({
  postTransaction: {
    metadata: {
      "magnam": "distinctio",
      "id": "labore",
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
      vars: {
        "natus": "nobis",
        "eum": "vero",
      },
    },
    timestamp: new Date("2022-11-24T10:55:00.183Z"),
  },
  ledger: "ledger001",
  preview: true,
}).then((res: CreateTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getTransaction

Get transaction from a ledger by its ID

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
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

## listTransactions

List transactions from a ledger, sorted by txid in descending order.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListTransactionsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.transactions.listTransactions({
  account: "users:001",
  after: "1234",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  destination: "users:001",
  endTime: new Date("2022-11-28T06:48:16.205Z"),
  endTimeDeprecated: new Date("2022-04-17T13:06:08.135Z"),
  ledger: "ledger001",
  metadata: {
    "quos": "sint",
    "accusantium": "mollitia",
    "reiciendis": "mollitia",
  },
  pageSize: 320997,
  pageSizeDeprecated: 431418,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2022-02-07T18:15:06.372Z"),
  startTimeDeprecated: new Date("2022-08-19T20:09:28.183Z"),
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revertTransaction

Revert a ledger transaction by its ID

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { RevertTransactionResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorsEnumEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
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
