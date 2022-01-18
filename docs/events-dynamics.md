---
sidebar_position: 4
---

# Events Dynamics

import Admonition from '@theme/Admonition';
const BLUE = "#137CBD";
const ORANGE = "#D9822B";
const GREEN = "#0F9960";

To able to incarnate a profile from raw events, you have to understand the relationship of **E**vent-**S**ession-**P**rofile (**E.S.P.**) trinity.

## The <span style={{color: BLUE}}>E.</span><span style={{color: ORANGE}}>S.</span><span style={{color: GREEN}}>P.</span> Model

### <span style={{color: BLUE}}>Events</span>

There are three type of events:

- **Behavioral events** are behaviors initiated from a person, it represents actions that users took from real world.
- **Built-in events** are events that have predefined behaviors by the system. A prominent example is `identify` event, where it's `target`'s properties are extracted to out and update to the resolved profile.
- **System events** or **"reaction" events** are ones that get generated within the system. Generally these events won't be visible on CDP web app.

### <span style={{color: ORANGE}}>Sessions</span>

Every events except **system** events always have a `session_id` attached along. This `session_id` is generated on the client side.
Theoretically speaking, `session_id` logically groups logical events from a same physical person together. A person (or Profile) could have multiple sessions (from different clients/devices, or long gap between interactions from a same device (it's up the client side to decide the boundary between session).

### <span style={{color: GREEN}}>Profiles</span>

A Profile is a representative object of a physical person. Profiles are bound with a collection of sessions and events. All of it traits and behaviors are inferred from its own events (it means there are no direct mutation on a profile object).

The relationship of these entities could be visualized as:

![ESP Model](/img/diagrams/events_flow.svg)

## The Flow

A typical flow to fabricate a profile is:


**Step #1**: First, send a `identify` event with a specific session ID.
In the identify events, specify a PII (***P**ersonal **I**dentifiable **I**nformation on the event's `target.properties`).
The `target`'s `itemType` must be `"analyticsUser"` for now (`itemId` — which usually comes in pair with `itemType` — can be skipped). An example of an `identify` event's payload:

```javascript
{
    "eventType": "identify",
    "sessionId": "a-session-id"
    "target": {
        "itemType": "analyticsUser",
        "properties": {
            "email": "someone@gmail.com"
        }
    }

}
```

**Step #2**: Secondly, send a desired behavioral events, a `click` for example:

```javascript
{
    "eventType": "click",
    "sessionId": "a-session-id"  // The sessionId must be exactly the same as the identify event above
    "properties": {
        "clickedItem": "<some-element-id>",
        "currentUrl": "<some-page-url>"
    }

}
```

After those steps , 4 new entities will be ingested on inside the system:

- **2 events** (built-in event `identify` and behavioral event `click`).
- **1 session** with the ID of `a-session-id`.
- **1 profile** (actually if a profile with `someone@gmail.com` is already exists, no new profile is created, but that existing profile will be resolved and the session is bound to that profile).

![Events Flow Example](/img/diagrams/events_flow_example.svg)