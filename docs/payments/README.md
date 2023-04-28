# payments

## Overview

Everything related to Payments

### Available Operations

* [connectorsStripeTransfer](#connectorsstripetransfer) - Transfer funds between Stripe accounts
* [getConnectorTask](#getconnectortask) - Read a specific task of the connector
* [getPayment](#getpayment) - Get a payment
* [installConnector](#installconnector) - Install a connector
* [listAllConnectors](#listallconnectors) - List all installed connectors
* [listConfigsAvailableConnectors](#listconfigsavailableconnectors) - List the configs of each available connector
* [listConnectorTasks](#listconnectortasks) - List tasks from a connector
* [listPayments](#listpayments) - List payments
* [paymentslistAccounts](#paymentslistaccounts) - List accounts
* [readConnectorConfig](#readconnectorconfig) - Read the config of a connector
* [resetConnector](#resetconnector) - Reset a connector
* [uninstallConnector](#uninstallconnector) - Uninstall a connector

## connectorsStripeTransfer

Execute a transfer between two Stripe accounts.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ConnectorsStripeTransferResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.connectorsStripeTransfer({
  amount: 100,
  asset: "USD",
  destination: "acct_1Gqj58KZcSIg2N2q",
  metadata: {
    "quasi": "reiciendis",
    "voluptatibus": "vero",
    "nihil": "praesentium",
  },
}).then((res: ConnectorsStripeTransferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getConnectorTask

Get a specific task associated to the connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetConnectorTaskResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.getConnectorTask({
  connector: ConnectorEnum.BankingCircle,
  taskId: "ipsa",
}).then((res: GetConnectorTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPayment

Get a payment

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetPaymentResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum, PaymentSchemeEnum, PaymentStatusEnum, PaymentTypeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.getPayment({
  paymentId: "omnis",
}).then((res: GetPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## installConnector

Install a connector by its name and config.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { InstallConnectorResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.installConnector({
  requestBody: {
    apiKey: "XXX",
  },
  connector: ConnectorEnum.CurrencyCloud,
}).then((res: InstallConnectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAllConnectors

List all installed connectors.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListAllConnectorsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.listAllConnectors().then((res: ListAllConnectorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listConfigsAvailableConnectors

List the configs of each available connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListConfigsAvailableConnectorsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.listConfigsAvailableConnectors().then((res: ListConfigsAvailableConnectorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listConnectorTasks

List all tasks associated with this connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListConnectorTasksResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.listConnectorTasks({
  connector: ConnectorEnum.Stripe,
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 39187,
}).then((res: ListConnectorTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listPayments

List payments

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListPaymentsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum, PaymentSchemeEnum, PaymentStatusEnum, PaymentTypeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.listPayments({
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 441711,
  sort: [
    "maiores",
    "dicta",
  ],
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## paymentslistAccounts

List accounts

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { PaymentslistAccountsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum, PaymentsAccountTypeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.paymentslistAccounts({
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 359444,
  sort: [
    "iusto",
    "dicta",
  ],
}).then((res: PaymentslistAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## readConnectorConfig

Read connector config

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadConnectorConfigResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.readConnectorConfig({
  connector: ConnectorEnum.CurrencyCloud,
}).then((res: ReadConnectorConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## resetConnector

Reset a connector by its name.
It will remove the connector and ALL PAYMENTS generated with it.


### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ResetConnectorResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.resetConnector({
  connector: ConnectorEnum.DummyPay,
}).then((res: ResetConnectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uninstallConnector

Uninstall a connector by its name.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UninstallConnectorResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.uninstallConnector({
  connector: ConnectorEnum.BankingCircle,
}).then((res: UninstallConnectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
