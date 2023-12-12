# AccountWithVolumesAndBalances


## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `address`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      | users:001                                |
| `balances`                               | Record<string, *number*>                 | :heavy_check_mark:                       | N/A                                      | {"COIN":100}                             |
| `metadata`                               | Record<string, *string*>                 | :heavy_check_mark:                       | N/A                                      | {"admin":"true"}                         |
| `type`                                   | *string*                                 | :heavy_minus_sign:                       | N/A                                      | virtual                                  |
| `volumes`                                | Record<string, Record<string, *number*>> | :heavy_check_mark:                       | N/A                                      | {"COIN":{"input":100,"output":0}}        |