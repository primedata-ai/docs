---
sidebar_position: 3
---

# Events Push API

The main endpoints is depended on the deployed site. For this document, we'll target the *Development* environment,
in which, the main endpoints for event collecting are https://dev.primedata.ai/powehi/context and https://dev.primedata.ai/powehi/smile.

:::info

There's a subtle difference between these two endpoints. But let's just use the latter for now.

:::


## Authentication

These are the two mandatory headers to authenticate against Tracking API:

- `X-Client-ID`
- `X-Client-Access-Token`

Check out [Register Data Sources](/docs/setup/creating-data-sources) to see how to acquire this pair.

## Setup

For an event to be captured on Prime side, the coming events must have its type pre-registered. See [Register Event Schemas](/docs/setup/creating-event-schema) to make a new event schema.

## Sending events


For example, let's say we created an Event Schema with the name `view`. Suppose it has an single properties named `url`. Then you could push an event to Prime by:

```bash
$ curl -X POST "https://dev.primedata.ai/powehi/smile"  \
      -H "X-Client-Id: ${YOUR_DATA_SOURCE_ID}" \
      -H "X-Client-Access-Token: ${YOUR_DATA_SOURCE_WRITE_KEY}" \
      -H 'Content-Type: application/json' \
      -d '{
            "sessionId": "45d01662-45ad-4f52-9d4f-ef77fde0b17a",
            "events": [
              {
                "eventType": "view",
                "properties": {
                  "url": "https://example.com"
                },
                "scope": ${YOUR_DATA_SOURCE_ID},
                "timeStamp": "2021-10-15T18:49:00+07:00",
                "source": { "itemId": "_", "itemType": "_", "scope": ${YOUR_DATA_SOURCE_ID} },
                "target": { "itemId": "_", "itemType": "_", "scope": ${YOUR_DATA_SOURCE_ID} }
              }
            ]
          }' \
      -D -
```

### Body attributes

#### Top-level attributes

| Name        | Required | Description                                                                                                                              |
|:------------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| `sessionId` | No      | A unique random ID generated on client side. Any format is okay, but preferably a [UUID](https://datatracker.ietf.org/doc/html/rfc4122). |
| `events`    | Yes      | An array of Event objects. **Max 500 events**                                                                                                |

#### `events`' object attributes

| Event        | Required | Description                                                                                                                                                                                                       |
|:-------------|----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `eventType`  | Yes      | The name that you setup when creating the **Event Schema**.                                                                                                                                                       |
| `scope`      | Yes      | Should be exactly the same as the data source ID / `X-Client-ID`, currently this has to be specified explicitly.                                                                                                  |
| `timeStamp`  | Yes      | ISO-8601 datetime format, logical time when the event occurred.                                                                                                                                                   |
| `sendAt`     | No       | ISO-8601 datetime format, optional client sending time.                                                                                                                                                           |
| `properties` | No*      | Corresponds to the properties that were setup on **Event Schema**. Make sure all the `required` properties are specified with the correct data type. _(Redundant properties will be trimmed out on server side)._ |
| `source`     | Yes      | Preserved for the profile context data.                                                                                                                                                                           |
| `target`     | Yes      | Preserved for the entity data.                                                                                                                                                                                    |

#### Entity's (`source` / `target`) attributes

| Entity       | Required | Description                                                                                                                                               |
|:-------------|----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `itemId`     | Yes      | Leave this as "\_" if there's no logical ID for the entity.                                                                                               |
| `itemType`   | Yes      | Leave this as "\_" if there's no logical type for the entity. (`identify` event must has this set to `analyticsUser`)                                     |
| `scope`      | Yes      | This is identical to the data source ID / `X-Client-ID`, currently this has to be specified explicitly.                                                   |
| `properties` | No       | Depends on the event's schema. For _built-in events_, currently only `identify` event will have this specified (with the respected profile's properties). |


### Response

The described request should response with a `200`-status response with a body of:
```json
{
    "processedEvents": 2,
    "profileId": null
}
```

`2` here means there are 2 **events** is processed.
`null` here means there's no **profile** get updated from this event.

### Error body

```jsx
401 Unauthorized
{
  "error": {
    "message": "client: unauthorized"
  }
}
```

```jsx
422 Unprocessable Entity
{
    "error": {
        "details": [
            {
                "field": "source.itemId",
                "description": "String length must be greater than or equal to 1"
            }
        ],
        "message": "Schema is invalid"
    }
}
```

### API Response

| CODE| STATUS | DESCRIPTION | MESSAGE |
| --- | --- | --- | --- |
| 200 | OK | Everything worked as expected. |
| 400 | Bad Request | |
| 401 | Unauthorized | No valid Access Token provided. | `client: unauthorized` |
| 404 | Not Found | The requested resource doesn’t exist. |
| 422 | Unprocessable Entity | There are something wrong with your event's field value. | `scope is not exists`, `Item not found`, `Schema is invalid` |
| 429 | Too Many Requests | More than **1024** concurrent request from this ip |
| 5xx | Server Errors | Something went wrong on PrimeData’s side. |



That newly ingested event can be inspected at "Event Logs" of your Data Source on https://dev.primedata.ai/Prime/en/data-source.