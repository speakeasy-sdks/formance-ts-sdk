# orchestration

## Overview

Everything related to Orchestration

### Available Operations

* [createWorkflow](#createworkflow) - Create workflow
* [getFlow](#getflow) - Get a flow by id
* [getWorkflowOccurrence](#getworkflowoccurrence) - Get a workflow occurrence by id
* [listFlows](#listflows) - List registered flows
* [listRuns](#listruns) - List occurrences of a workflow
* [orchestrationgetServerInfo](#orchestrationgetserverinfo) - Get server info
* [runWorkflow](#runworkflow) - Run workflow

## createWorkflow

Create a workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.createWorkflow({
  stages: [
    {
      "saepe": "quidem",
      "architecto": "ipsa",
    },
    {
      "est": "mollitia",
      "laborum": "dolores",
      "dolorem": "corporis",
      "explicabo": "nobis",
    },
    {
      "omnis": "nemo",
      "minima": "excepturi",
    },
  ],
}).then((res: CreateWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.CreateWorkflowRequest](../../models/shared/createworkflowrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateWorkflowResponse](../../models/operations/createworkflowresponse.md)>**


## getFlow

Get a flow by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetFlowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.getFlow({
  flowId: "accusantium",
}).then((res: GetFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetFlowRequest](../../models/operations/getflowrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetFlowResponse](../../models/operations/getflowresponse.md)>**


## getWorkflowOccurrence

Get a workflow occurrence by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWorkflowOccurrenceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.getWorkflowOccurrence({
  flowId: "iure",
  runId: "culpa",
}).then((res: GetWorkflowOccurrenceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetWorkflowOccurrenceRequest](../../models/operations/getworkflowoccurrencerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetWorkflowOccurrenceResponse](../../models/operations/getworkflowoccurrenceresponse.md)>**


## listFlows

List registered flows

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListFlowsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.listFlows().then((res: ListFlowsResponse) => {
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

**Promise<[operations.ListFlowsResponse](../../models/operations/listflowsresponse.md)>**


## listRuns

List occurrences of a workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListRunsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.listRuns({
  flowId: "doloribus",
}).then((res: ListRunsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.ListRunsRequest](../../models/operations/listrunsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ListRunsResponse](../../models/operations/listrunsresponse.md)>**


## orchestrationgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { OrchestrationgetServerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.orchestrationgetServerInfo().then((res: OrchestrationgetServerInfoResponse) => {
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

**Promise<[operations.OrchestrationgetServerInfoResponse](../../models/operations/orchestrationgetserverinforesponse.md)>**


## runWorkflow

Run workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { RunWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCode } from "@speakeasy-sdks/formance/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.runWorkflow({
  requestBody: {
    "architecto": "mollitia",
    "dolorem": "culpa",
    "consequuntur": "repellat",
    "mollitia": "occaecati",
  },
  flowId: "numquam",
  wait: false,
}).then((res: RunWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.RunWorkflowRequest](../../models/operations/runworkflowrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RunWorkflowResponse](../../models/operations/runworkflowresponse.md)>**

