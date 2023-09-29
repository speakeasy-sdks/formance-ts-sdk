# Orchestration
(*orchestration*)

### Available Operations

* [cancelEvent](#cancelevent) - Cancel a running workflow
* [createWorkflow](#createworkflow) - Create workflow
* [getInstance](#getinstance) - Get a workflow instance by id
* [getInstanceHistory](#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](#getinstancestagehistory) - Get a workflow instance stage history
* [getWorkflow](#getworkflow) - Get a flow by id
* [listInstances](#listinstances) - List instances of a workflow
* [listWorkflows](#listworkflows) - List registered workflows
* [orchestrationgetServerInfo](#orchestrationgetserverinfo) - Get server info
* [runWorkflow](#runworkflow) - Run workflow
* [sendEvent](#sendevent) - Send an event to a running workflow

## cancelEvent

Cancel a running workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CancelEventResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.cancelEvent({
  instanceID: "revolutionary",
}).then((res: CancelEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.CancelEventRequest](../../models/operations/canceleventrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CancelEventResponse](../../models/operations/canceleventresponse.md)>**


## createWorkflow

Create a workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { CreateWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.createWorkflow({
  name: "amidst leverage kelvin",
  stages: [
    {
      "tempore": "vivaciously",
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


## getInstance

Get a workflow instance by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetInstanceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.getInstance({
  instanceID: "digital North Borders",
}).then((res: GetInstanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetInstanceRequest](../../models/operations/getinstancerequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetInstanceResponse](../../models/operations/getinstanceresponse.md)>**


## getInstanceHistory

Get a workflow instance history by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetInstanceHistoryResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.getInstanceHistory({
  instanceID: "Bedfordshire",
}).then((res: GetInstanceHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetInstanceHistoryRequest](../../models/operations/getinstancehistoryrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetInstanceHistoryResponse](../../models/operations/getinstancehistoryresponse.md)>**


## getInstanceStageHistory

Get a workflow instance stage history

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetInstanceStageHistoryResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.getInstanceStageHistory({
  instanceID: "UAE Beauty",
  number: 789895,
}).then((res: GetInstanceStageHistoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetInstanceStageHistoryRequest](../../models/operations/getinstancestagehistoryrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetInstanceStageHistoryResponse](../../models/operations/getinstancestagehistoryresponse.md)>**


## getWorkflow

Get a flow by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.getWorkflow({
  flowId: "Security restrain",
}).then((res: GetWorkflowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetWorkflowRequest](../../models/operations/getworkflowrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetWorkflowResponse](../../models/operations/getworkflowresponse.md)>**


## listInstances

List instances of a workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListInstancesResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.listInstances({
  running: false,
  workflowID: "Hybrid Azerbaijanian",
}).then((res: ListInstancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListInstancesRequest](../../models/operations/listinstancesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListInstancesResponse](../../models/operations/listinstancesresponse.md)>**


## listWorkflows

List registered workflows

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListWorkflowsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.listWorkflows().then((res: ListWorkflowsResponse) => {
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

**Promise<[operations.ListWorkflowsResponse](../../models/operations/listworkflowsresponse.md)>**


## orchestrationgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { OrchestrationgetServerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

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

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.runWorkflow({
  requestBody: {
    "delectus": "Accountability",
  },
  wait: false,
  workflowID: "newton aggregate Metal",
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


## sendEvent

Send an event to a running workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { SendEventResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.orchestration.sendEvent({
  requestBody: {
    name: "Male lavender Fritsch",
  },
  instanceID: "Regional once East",
}).then((res: SendEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.SendEventRequest](../../models/operations/sendeventrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.SendEventResponse](../../models/operations/sendeventresponse.md)>**

