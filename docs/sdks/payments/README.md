# Payments
(*payments*)

### Available Operations

* [connectorsStripeTransfer](#connectorsstripetransfer) - Transfer funds between Stripe accounts
* [connectorsTransfer](#connectorstransfer) - Transfer funds between Connector accounts
* [getConnectorTask](#getconnectortask) - Read a specific task of the connector
* [getPayment](#getpayment) - Get a payment
* [installConnector](#installconnector) - Install a connector
* [listAllConnectors](#listallconnectors) - List all installed connectors
* [listConfigsAvailableConnectors](#listconfigsavailableconnectors) - List the configs of each available connector
* [listConnectorTasks](#listconnectortasks) - List tasks from a connector
* [listConnectorsTransfers](#listconnectorstransfers) - List transfers and their statuses
* [listPayments](#listpayments) - List payments
* [paymentsgetServerInfo](#paymentsgetserverinfo) - Get server info
* [paymentslistAccounts](#paymentslistaccounts) - List accounts
* [readConnectorConfig](#readconnectorconfig) - Read the config of a connector
* [resetConnector](#resetconnector) - Reset a connector
* [uninstallConnector](#uninstallconnector) - Uninstall a connector
* [updateMetadata](#updatemetadata) - Update metadata

## connectorsStripeTransfer

Execute a transfer between two Stripe accounts.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.connectorsStripeTransfer({
    amount: 100,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    metadata: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.StripeTransferRequest](../../models/shared/stripetransferrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ConnectorsStripeTransferResponse](../../models/operations/connectorsstripetransferresponse.md)>**


## connectorsTransfer

Execute a transfer between two accounts.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.connectorsTransfer({
    transferRequest: {
      amount: 100,
      asset: "USD",
      destination: "acct_1Gqj58KZcSIg2N2q",
      source: "acct_1Gqj58KZcSIg2N2q",
    },
    connector: Connector.Wise,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ConnectorsTransferRequest](../../models/operations/connectorstransferrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ConnectorsTransferResponse](../../models/operations/connectorstransferresponse.md)>**


## getConnectorTask

Get a specific task associated to the connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.getConnectorTask({
    connector: Connector.BankingCircle,
    taskId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetConnectorTaskRequest](../../models/operations/getconnectortaskrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetConnectorTaskResponse](../../models/operations/getconnectortaskresponse.md)>**


## getPayment

Get a payment

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.getPayment({
    paymentId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetPaymentRequest](../../models/operations/getpaymentrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetPaymentResponse](../../models/operations/getpaymentresponse.md)>**


## installConnector

Install a connector by its name and config.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.installConnector({
    requestBody: "string",
    connector: Connector.DummyPay,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.InstallConnectorRequest](../../models/operations/installconnectorrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.InstallConnectorResponse](../../models/operations/installconnectorresponse.md)>**


## listAllConnectors

List all installed connectors.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.listAllConnectors();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListAllConnectorsResponse](../../models/operations/listallconnectorsresponse.md)>**


## listConfigsAvailableConnectors

List the configs of each available connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.listConfigsAvailableConnectors();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListConfigsAvailableConnectorsResponse](../../models/operations/listconfigsavailableconnectorsresponse.md)>**


## listConnectorTasks

List all tasks associated with this connector.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.listConnectorTasks({
    connector: Connector.DummyPay,
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListConnectorTasksRequest](../../models/operations/listconnectortasksrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListConnectorTasksResponse](../../models/operations/listconnectortasksresponse.md)>**


## listConnectorsTransfers

List transfers

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.listConnectorsTransfers({
    connector: Connector.Modulr,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListConnectorsTransfersRequest](../../models/operations/listconnectorstransfersrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListConnectorsTransfersResponse](../../models/operations/listconnectorstransfersresponse.md)>**


## listPayments

List payments

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.listPayments({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    sort: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListPaymentsRequest](../../models/operations/listpaymentsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListPaymentsResponse](../../models/operations/listpaymentsresponse.md)>**


## paymentsgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.paymentsgetServerInfo();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PaymentsgetServerInfoResponse](../../models/operations/paymentsgetserverinforesponse.md)>**


## paymentslistAccounts

List accounts

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.paymentslistAccounts({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    sort: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PaymentslistAccountsRequest](../../models/operations/paymentslistaccountsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PaymentslistAccountsResponse](../../models/operations/paymentslistaccountsresponse.md)>**


## readConnectorConfig

Read connector config

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.readConnectorConfig({
    connector: Connector.BankingCircle,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ReadConnectorConfigRequest](../../models/operations/readconnectorconfigrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ReadConnectorConfigResponse](../../models/operations/readconnectorconfigresponse.md)>**


## resetConnector

Reset a connector by its name.
It will remove the connector and ALL PAYMENTS generated with it.


### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.resetConnector({
    connector: Connector.CurrencyCloud,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ResetConnectorRequest](../../models/operations/resetconnectorrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ResetConnectorResponse](../../models/operations/resetconnectorresponse.md)>**


## uninstallConnector

Uninstall a connector by its name.

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { Connector } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.uninstallConnector({
    connector: Connector.DummyPay,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UninstallConnectorRequest](../../models/operations/uninstallconnectorrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UninstallConnectorResponse](../../models/operations/uninstallconnectorresponse.md)>**


## updateMetadata

Update metadata

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";

(async() => {
  const sdk = new Formance({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.payments.updateMetadata({
    paymentMetadata: {},
    paymentId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateMetadataRequest](../../models/operations/updatemetadatarequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateMetadataResponse](../../models/operations/updatemetadataresponse.md)>**

