---
sidebar_position: 1
---

# Ingesting Events

On how to get events into Prime's system.

The main endpoint to push events to is https://dev.primedata.ai/powehi/smile.

## Events structure

Let's look an an example of a canonical "Page View" event:

```json
{
    "eventType": "view",
    "properties": {
        "pageURL": "https://primedata.ai/about"
    }
}
```


Once recorded in pushed into PrimeData, the event can be inspected at https://dev.primedata.ai/Prime/en/data-source/detail/DATA_SOURCE_ID (switch to Event Logs).


_(more on this data source later)_
