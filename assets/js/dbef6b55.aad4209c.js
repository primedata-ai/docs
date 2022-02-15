"use strict";(self.webpackChunkprime_docs=self.webpackChunkprime_docs||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1923:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:3},p="Events Tracking API",d={unversionedId:"events-tracking",id:"events-tracking",title:"Events Tracking API",description:"The main endpoints is depended on the deployed site. For this document, we'll target the Development environment,",source:"@site/docs/events-tracking.md",sourceDirName:".",slug:"/events-tracking",permalink:"/docs/events-tracking",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install PrimeData Web SDKs",permalink:"/docs/setup/install-js-sdk"},next:{title:"Events Dynamics",permalink:"/docs/events-dynamics"}},s=[{value:"Authentication",id:"authentication",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Sending events",id:"sending-events",children:[{value:"Body attributes",id:"body-attributes",children:[{value:"Top-level attributes",id:"top-level-attributes",children:[],level:4},{value:"<code>events</code>&#39; object attributes",id:"events-object-attributes",children:[],level:4},{value:"Entity&#39;s (<code>source</code> / <code>target</code>) attributes",id:"entitys-source--target-attributes",children:[],level:4}],level:3},{value:"Response",id:"response",children:[],level:3}],level:2}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events-tracking-api"},"Events Tracking API"),(0,i.kt)("p",null,"The main endpoints is depended on the deployed site. For this document, we'll target the ",(0,i.kt)("em",{parentName:"p"},"Development")," environment,\nin which, the main endpoints for event collecting are ",(0,i.kt)("a",{parentName:"p",href:"https://dev.primedata.ai/powehi/context"},"https://dev.primedata.ai/powehi/context")," and ",(0,i.kt)("a",{parentName:"p",href:"https://dev.primedata.ai/powehi/smile"},"https://dev.primedata.ai/powehi/smile"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There's a subtle difference between these two endpoints. But let's just use the latter for now."))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"These are the two mandatory headers to authenticate against Tracking API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-Client-ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-Client-Access-Token"))),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup/creating-data-sources"},"Register Data Sources")," to see how to acquire this pair."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"For an event to be captured on Prime side, the coming events must have its type pre-registered. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup/creating-event-schema"},"Register Event Schemas")," to make a new event schema."),(0,i.kt)("h2",{id:"sending-events"},"Sending events"),(0,i.kt)("p",null,"For example, let's say we created an Event Schema with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),". Suppose it has an single properties named ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),". Then you could push an event to Prime by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST "https://dev.primedata.ai/powehi/smile"  \\\n      -H "X-Client-Id: ${YOUR_DATA_SOURCE_ID}" \\\n      -H "X-Client-Access-Token: ${YOUR_DATA_SOURCE_WRITE_KEY}" \\\n      -H \'Content-Type: application/json\' \\\n      -d \'{\n            "sessionId": "45d01662-45ad-4f52-9d4f-ef77fde0b17a",\n            "events": [\n              {\n                "eventType": "view",\n                "properties": {\n                  "url": "https://example.com"\n                },\n                "scope": ${YOUR_DATA_SOURCE_ID},\n                "timeStamp": "2021-10-15T18:49:00+07:00",\n                "source": { "itemId": "_", "itemType": "_", "scope": ${YOUR_DATA_SOURCE_WRITE_KEY} },\n                "target": { "itemId": "_", "itemType": "_", "scope": ${YOUR_DATA_SOURCE_WRITE_KEY} }\n              }\n            ]\n          }\' \\\n      -D -\n')),(0,i.kt)("h3",{id:"body-attributes"},"Body attributes"),(0,i.kt)("h4",{id:"top-level-attributes"},"Top-level attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sessionId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A unique random ID generated on client side. Any format is okay, but preferably a ",(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc4122"},"UUID"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"events")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An array of Event objects")))),(0,i.kt)("h4",{id:"events-object-attributes"},(0,i.kt)("inlineCode",{parentName:"h4"},"events"),"' object attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventType")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name that you setup when creating the ",(0,i.kt)("strong",{parentName:"td"},"Event Schema"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scope")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Should be exactly the same as the data source ID / ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Client-ID"),", currently this has to be specified explicitly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStamp")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ISO-8601 datetime format, logical time when the event occurred.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sendAt")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ISO-8601 datetime format, optional client sending time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Corresponds to the properties that were setup on ",(0,i.kt)("strong",{parentName:"td"},"Event Schema"),". Make sure all the ",(0,i.kt)("inlineCode",{parentName:"td"},"required")," properties are specified with the correct data type. ",(0,i.kt)("em",{parentName:"td"},"(Redundant properties will be trimmed out on server side)."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An ",(0,i.kt)("strong",{parentName:"td"},"Entity")," item, for now ",(0,i.kt)("em",{parentName:"td"},"this is always required"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ditto.")))),(0,i.kt)("h4",{id:"entitys-source--target-attributes"},"Entity's (",(0,i.kt)("inlineCode",{parentName:"h4"},"source")," / ",(0,i.kt)("inlineCode",{parentName:"h4"},"target"),") attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Entity"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"itemId")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Leave this as "',"_","\" if there's no logical ID for the entity.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"itemType")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Leave this as "',"_","\" if there's no logical type for the entity. (",(0,i.kt)("inlineCode",{parentName:"td"},"identify")," event must has this set to ",(0,i.kt)("inlineCode",{parentName:"td"},"analyticsUser"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scope")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This is identical to the data source ID / ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Client-ID"),", currently this has to be specified explicitly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Depends on the event's schema. For ",(0,i.kt)("em",{parentName:"td"},"built-in events"),", currently only ",(0,i.kt)("inlineCode",{parentName:"td"},"identify")," event will have this specified (with the respected profile's properties).")))),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"The described request should response with a ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),"-status response with a body of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"updated": 0}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"0")," here means there's no ",(0,i.kt)("strong",{parentName:"em"},"profile")," get updated from this event).")),(0,i.kt)("p",null,'That newly ingested event can be inspected at "Event Logs" of your Data Source on ',(0,i.kt)("a",{parentName:"p",href:"https://dev.primedata.ai/Prime/en/data-source"},"https://dev.primedata.ai/Prime/en/data-source"),"."))}c.isMDXComponent=!0}}]);