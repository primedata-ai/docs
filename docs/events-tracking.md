---
sidebar_position: 3
---

# Events Tracking API

The main endpoints is depended on the deployed site. For this document, we'll target the *Development* environment,
in which, the main endpoints for event collecting are https://dev.primedata.ai/powehi/context and https://dev.primedata.ai/powehi/smile.

:::info

There's a subtle difference between these two endpoints. But let's just use the latter for now.

:::


## Authentication

These are the two mandatory headers to authenticate against Tracking API:

- `X-Client-ID`
- `X-Client-Access-Token`

See [Register Data Sources](setup/creating-data-sources) to see how to acquire this pair.

## Setup

For an event to be captured on Prime side, the coming events must have its type pre-registered. See [Register Event Schemas](setup/creating-event-schema) to make a new event schema.

## Sending events


For example, let's say we created an Event Schema with the name `view`. You could push an event to Prime by:

```bash
$ curl -X POST "https://dev.primedata.ai/powehi/smile"  \
      -H "X-Client-Id: ${YOUR_DATA_SOURCE_ID}" \
      -H "X-Client-Access-Token: ${YOUR_DATA_SOURCE_WRITE_KEY}" \
      -H 'Content-Type: application/json' \
      -d '{"events": [
              {
                  "eventType": "view",
                  "sessionId": ${CLIENT_UNIQUE_SESSION_ID},
                  "properties": {},
                  "scope": ${YOUR_DATA_SOURCE_ID},
                  "timeStamp": "2021-10-15T18:49:00+07:00",
                  "source": { "itemId": "_", "itemType": "_" },
                  "target": { "itemId": "_", "itemType": "_" }
              }
          ]}'
```

| JSON Body Parameters | Description                                                                                                                                                                                                       |
| :--                  | :--                                                                                                                                                                                                               |
| `eventType`          | The name that you setup when creating the Event Schema.                                                                                                                                                           |
| `sessionId`          | A unique random ID generated on client side. Any format is okay, but preferably a [UUID](https://datatracker.ietf.org/doc/html/rfc4122).                                                                          |
| `properties`         | Also corresponding the properties that were setup on Event Schema. Make sure all the `required` properties are specified with the correct data type. _(Redundant properties will be trimmed out on server side)._ |
| `scope`              | Should be exactly the same as the `X-Client-ID`, for now they are both required.                                                                                                                                  |
| `timeStamp`          | ISO 8601 datetime format. Notes that this is the logical time when the event occurred. You can specify an (optional) explicit tracking time with `sendAt`.                                                        |
| `source`             | Depends on the event type, this is sometimes required.                                                                                                                                                           |
| `target`             | Ditto.                                                                                                                                                                                                            |

The above request should response with a `200`-status response with a body of:
```json
{"updated": 0}
````

_(`0` here means there's no **profile** get updated from this event)._

That newly ingested event can be inspected at "Event Logs" of your Data Source on https://dev.primedata.ai/Prime/en/data-source.