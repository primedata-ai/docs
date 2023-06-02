# Entities

The entity concept is an earlier missing piece in our model of a full sentence:

**Subject** (profile) + **Verb** (event) + **Object** (entity).

## Concepts


### Entity Types

Similar to event types, entity types indicate the class of a certain entity item.

Examples: Product, Voucher, WebPage, etc.

### Entity Items

Represent an entity object. Entity items must be individually addressable through an ID (if they are Products, the IDs could be SKUs; for vouchers, they could be voucher codes).


### Entity Collections

Are simply labels over entity items.

Unlike Entity Item, which is synchronized as a whole, and **the data source solely dictates the entity item’s data**. In contrast, entity collection maintenance is a **mixed responsibility**, which is subdivided into two:

- The binding of items and their collection. (This is an n-to-n relationship. An entity item could “belong” to multiple collections, and a collection could be labeled over multiple entity items.)
- The intrinsic properties of the collection itself (collection’s name, description, status, etc.)

Both of these pieces of information are derived from the data source *and* could be modified directly by CDP users/admins. This explains the reason why entity collection operations are also exposed through Unomi Restful API (while events, profiles, and entity items can only be created and updated via the event collection/ingestion channel).

## Entity Creation API

<Admonition type="caution" icon="⚠️">
  <p>
    Before calling this API, the Entity Schema must be registered on the CDP app first.
  </p>
</Admonition>


Entity ingestion leverage the same mechanism with [event ingestion](/docs/events-tracking).
The notable difference is that the `eventType` is always `"SaveEntity"` and the placement of the object's properties:

```bash
$ curl -X POST "https://dev.primedata.ai/powehi/smile"  \
      -H "X-Client-Id: ${YOUR_DATA_SOURCE_ID}" \
      -H "X-Client-Access-Token: ${YOUR_DATA_SOURCE_WRITE_KEY}" \
      -H 'Content-Type: application/json' \
      -d '{
            "sessionId": "45d01662-45ad-4f52-9d4f-ef77fde0b17a",
            "events": [
              {
                "eventType": "SaveEntity",
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