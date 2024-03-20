# AccountWithVolumesAndBalances


## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `address`                                 | *string*                                  | :heavy_check_mark:                        | N/A                                       | users:001                                 |
| `balances`                                | Record<string, *number*>                  | :heavy_check_mark:                        | N/A                                       | {<br/>"COIN": 100<br/>}                   |
| `metadata`                                | Record<string, *string*>                  | :heavy_check_mark:                        | N/A                                       | {<br/>"admin": "true"<br/>}               |
| `type`                                    | *string*                                  | :heavy_minus_sign:                        | N/A                                       | virtual                                   |
| `volumes`                                 | Record<string, Record<string, *number*>>  | :heavy_check_mark:                        | N/A                                       | {<br/>"COIN": {<br/>"input": 100,<br/>"output": 0<br/>}<br/>} |