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
import { CreateWorkflowRequest, CreateWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: shared.CreateWorkflowRequest = {
  stages: [
    {
      "architecto": "mollitia",
      "dolorem": "culpa",
      "consequuntur": "repellat",
      "mollitia": "occaecati",
    },
    {
      "commodi": "quam",
      "molestiae": "velit",
    },
    {
      "quia": "quis",
      "vitae": "laborum",
      "animi": "enim",
    },
    {
      "quo": "sequi",
    },
  ],
};

sdk.orchestration.createWorkflow(req).then((res: CreateWorkflowResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getFlow

Get a flow by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetFlowRequest, GetFlowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetFlowRequest = {
  flowId: "tenetur",
};

sdk.orchestration.getFlow(req).then((res: GetFlowResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getWorkflowOccurrence

Get a workflow occurrence by id

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { GetWorkflowOccurrenceRequest, GetWorkflowOccurrenceResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetWorkflowOccurrenceRequest = {
  flowId: "ipsam",
  runId: "id",
};

sdk.orchestration.getWorkflowOccurrence(req).then((res: GetWorkflowOccurrenceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listFlows

List registered flows

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListFlowsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.listFlows().then((res: ListFlowsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listRuns

List occurrences of a workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { ListRunsRequest, ListRunsResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: ListRunsRequest = {
  flowId: "possimus",
};

sdk.orchestration.listRuns(req).then((res: ListRunsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## orchestrationgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { OrchestrationgetServerInfoResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.orchestration.orchestrationgetServerInfo().then((res: OrchestrationgetServerInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## runWorkflow

Run workflow

### Example Usage

```typescript
import { Formance } from "@speakeasy-sdks/formance";
import { RunWorkflowRequest, RunWorkflowResponse } from "@speakeasy-sdks/formance/dist/sdk/models/operations";
import { ErrorErrorCodeEnum } from "@speakeasy-sdks/formance/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: RunWorkflowRequest = {
  requestBody: {
    "quasi": "error",
  },
  flowId: "temporibus",
  wait: false,
};

sdk.orchestration.runWorkflow(req).then((res: RunWorkflowResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
