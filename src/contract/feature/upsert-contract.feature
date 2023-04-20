Feature: Upsert contracts

  Scenario: Create new contracts for an api endpoint
    When we receive contracts
      | Application    | HTTP Method | Endpoint  | Query parameters          | Body                    |
      | Provider API 1 | Get         | /comments | page:number, limit:number |                         |
      | Provider API 2 | Post        | /reviews  |                           | input: a useful review  |
      | Provider API 3 | Put         | /comments |                           | input: a useful comment |
    Then we store contracts
      | Application    | HTTP Method | Endpoint  | Query parameters          | Body                    |
      | Provider API 1 | Get         | /comments | page:number, limit:number |                         |
      | Provider API 2 | Post        | /reviews  |                           | input: a useful review  |
      | Provider API 3 | Put         | /comments |                           | input: a useful comment |
