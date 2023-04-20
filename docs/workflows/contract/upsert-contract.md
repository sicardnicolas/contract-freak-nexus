# Upsert contracts

## Input

Format:

```text
[
  {
    "applicationId": string,
    "method": "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE",
    "endpoint": string,
    "queryParameters": {
        "key": string
    } | null,
    "body": {
        "key": value
    } | null
  }
]
```

Example:

```json
[
  {
    "applicationId": "c29tZUNvZGU=",
    "method": "GET",
    "endpoint": "/comments",
    "queryParameters": {
      "page": "int",
      "limit": "int"
    }
  },
  {
    "applicationId": "c29tZUNvZ45+",
    "method": "POST",
    "endpoint": "/reviews",
    "body": {
      "input": "a useful comment"
    }
  }
]
```

## Output

We store contracts with the same format.
