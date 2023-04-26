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
import { ConnectorsStripeTransferResponse, StripeTransferRequest } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: shared.StripeTransferRequest = {
  amount: 100,
  asset: "USD",
  destination: "acct_1Gqj58KZcSIg2N2q",
  metadata: {
    "quasi": "reiciendis",
    "voluptatibus": "vero",
    "nihil": "praesentium",
  },
};

sdk.payments.connectorsStripeTransfer(req).then((res: ConnectorsStripeTransferResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getConnectorTask

Get a specific task associated to the connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetConnectorTaskRequest, GetConnectorTaskResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetConnectorTaskRequest = {
  connector: ConnectorEnum.BankingCircle,
  taskId: "ipsa",
};

sdk.payments.getConnectorTask(req).then((res: GetConnectorTaskResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPayment

Get a payment

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetPaymentRequest, GetPaymentResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum, PaymentSchemeEnum, PaymentStatusEnum, PaymentTypeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetPaymentRequest = {
  paymentId: "omnis",
};

sdk.payments.getPayment(req).then((res: GetPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## installConnector

Install a connector by its name and config.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { InstallConnectorRequest, InstallConnectorResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: InstallConnectorRequest = {
  requestBody: {
    apiKey: "XXX",
  },
  connector: ConnectorEnum.CurrencyCloud,
};

sdk.payments.installConnector(req).then((res: InstallConnectorResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.listAllConnectors().then((res: ListAllConnectorsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.payments.listConfigsAvailableConnectors().then((res: ListConfigsAvailableConnectorsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listConnectorTasks

List all tasks associated with this connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListConnectorTasksRequest, ListConnectorTasksResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ListConnectorTasksRequest = {
  connector: ConnectorEnum.Stripe,
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 39187,
};

sdk.payments.listConnectorTasks(req).then((res: ListConnectorTasksResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listPayments

List payments

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListPaymentsRequest, ListPaymentsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum, PaymentSchemeEnum, PaymentStatusEnum, PaymentTypeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ListPaymentsRequest = {
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 441711,
  sort: [
    "maiores",
    "dicta",
  ],
};

sdk.payments.listPayments(req).then((res: ListPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## paymentslistAccounts

List accounts

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { PaymentslistAccountsRequest, PaymentslistAccountsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum, PaymentsAccountTypeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: PaymentslistAccountsRequest = {
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  pageSize: 359444,
  sort: [
    "iusto",
    "dicta",
  ],
};

sdk.payments.paymentslistAccounts(req).then((res: PaymentslistAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## readConnectorConfig

Read connector config

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ReadConnectorConfigRequest, ReadConnectorConfigResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ReadConnectorConfigRequest = {
  connector: ConnectorEnum.CurrencyCloud,
};

sdk.payments.readConnectorConfig(req).then((res: ReadConnectorConfigResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { ResetConnectorRequest, ResetConnectorResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ResetConnectorRequest = {
  connector: ConnectorEnum.DummyPay,
};

sdk.payments.resetConnector(req).then((res: ResetConnectorResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uninstallConnector

Uninstall a connector by its name.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { UninstallConnectorRequest, UninstallConnectorResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ConnectorEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: UninstallConnectorRequest = {
  connector: ConnectorEnum.BankingCircle,
};

sdk.payments.uninstallConnector(req).then((res: UninstallConnectorResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
