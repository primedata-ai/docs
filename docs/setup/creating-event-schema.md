# Register an Event Schema

## Via Web App

Go to [Event Schemas Overview](https://dev.primedata.ai/Prime/en/schemas/event/overview) click <img height="28" style={{transform: 'translateY(.5rem)'}} alt="Event Schema create button" src="/img/btn_event_schema_create.png"/>. Choose the event name, add the necessary properties, then <img height="28" style={{transform: 'translateY(.5rem)'}} alt="Event Schema create button" src="/img/btn_event_schema_publish.png"/> it.

Once done, you can try to [Send Events](../events-tracking#sending-events)

## Via API

The endpoint: https://dev.primedata.ai/v1/chiron/events.

Example:

```
$ curl -X POST https://dev.primedata.ai/v1/chiron/events \
       -H 'Authorization: Basic ${JWT_TOKEN}' \
       -d '{
         "alias": "an-event-id",
         "title": "My Event",
         "isPublish": true,
         "properties": {
            "anProperty": {
              "type": "boolean",
              "alias": "anProperty",
              "title": "An Property"
           },
            "anotherProperty": {
              "type": "string",
              "alias": "anProperty",
              "title": "An Property"
           },
         }
       }' \
       -D -
```

### JSON body attributes

| Attribute   | Required | Description                                                                                                                |
|-------------|----------|----------------------------------------------------------------------------------------------------------------------------|
| alias       | Yes      | Unique ID for the schema.                                                                                                  |
| title       | Yes      | Human readable title.                                                                                                      |
| description | No       | Optional description.                                                                                                      |
| required    | No       | An array of required fields. For example, `["cartId", "productName"]`. Empty by default.                                   |
| properties  | Yes      | An object manifests this event's properties. For example: `{ "cartId": {...}, "productName": {....} }` more details below. |
| conversion  | No       | Whether this object is a conversion event, default o                                                                       |
| isPublish   | Yes      | Current must be set to `true`.                                                                                             |
| tags        | No       | An array of tag string, purely for the sake of convenience of the web app.                                                 |


### `properties` attributes

| Attribute   | Required | Description                                                                                                                           |
|-------------|----------|---------------------------------------------------------------------------------------------------------------------------------------|
| type        | Yes      | Available values: `boolean`, `number`, `string`, `array`.                                                                             |
| alias       | Yes      | Unique ID for the properties per this event schema. Currently it should match the property key specified from the outer event schema. |
| title       | Yes      | Human readable title.                                                                                                                 |
| description | No       | Optional property description.                                                                                                        |
