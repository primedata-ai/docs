"use strict";(self.webpackChunkprime_docs=self.webpackChunkprime_docs||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1923:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:3},s="Events Tracking API",l={unversionedId:"events-tracking",id:"events-tracking",title:"Events Tracking API",description:"The main endpoints is depended on the deployed site. For this document, we'll target the Development environment,",source:"@site/docs/events-tracking.md",sourceDirName:".",slug:"/events-tracking",permalink:"/docs/docs/events-tracking",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Install PrimeData Web SDKs",permalink:"/docs/docs/setup/install-js-sdk"},next:{title:"Events Dynamics",permalink:"/docs/docs/events-dynamics"}},d=[{value:"Authentication",id:"authentication",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Sending events",id:"sending-events",children:[],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events-tracking-api"},"Events Tracking API"),(0,i.kt)("p",null,"The main endpoints is depended on the deployed site. For this document, we'll target the ",(0,i.kt)("em",{parentName:"p"},"Development")," environment,\nin which, the main endpoints for event collecting are ",(0,i.kt)("a",{parentName:"p",href:"https://dev.primedata.ai/powehi/context"},"https://dev.primedata.ai/powehi/context")," and ",(0,i.kt)("a",{parentName:"p",href:"https://dev.primedata.ai/powehi/smile"},"https://dev.primedata.ai/powehi/smile"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There's a subtle difference between these two endpoints. But let's just use the latter for now."))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"These are the two mandatory headers to authenticate against Tracking API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-Client-ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"X-Client-Access-Token"))),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"setup/creating-data-sources"},"Register Data Sources")," to see how to acquire this pair."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"For an event to be captured on Prime side, the coming events must have its type pre-registered. See ",(0,i.kt)("a",{parentName:"p",href:"setup/creating-event-schema"},"Register Event Schemas")," to make a new event schema."),(0,i.kt)("h2",{id:"sending-events"},"Sending events"),(0,i.kt)("p",null,"For example, let's say we created an Event Schema with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),". You could push an event to Prime by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST "https://dev.primedata.ai/powehi/smile"  \\\n      -H "X-Client-Id: ${YOUR_DATA_SOURCE_ID}" \\\n      -H "X-Client-Access-Token: ${YOUR_DATA_SOURCE_WRITE_KEY}" \\\n      -H \'Content-Type: application/json\' \\\n      -d \'{"events": [\n              {\n                  "eventType": "view",\n                  "sessionId": ${CLIENT_UNIQUE_SESSION_ID},\n                  "properties": {},\n                  "scope": ${YOUR_DATA_SOURCE_ID},\n                  "timeStamp": "2021-10-15T18:49:00+07:00",\n                  "source": { "itemId": "_", "itemType": "_" },\n                  "target": { "itemId": "_", "itemType": "_" }\n              }\n          ]}\'\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"JSON Body Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventType")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name that you setup when creating the Event Schema.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sessionId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A unique random ID generated on client side. Any format is okay, but preferably a ",(0,i.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc4122"},"UUID"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Also corresponding the properties that were setup on Event Schema. Make sure all the ",(0,i.kt)("inlineCode",{parentName:"td"},"required")," properties are specified with the correct data type. ",(0,i.kt)("em",{parentName:"td"},"(Redundant properties will be trimmed out on server side)."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scope")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Should be exactly the same as the ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Client-ID"),", for now they are both required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeStamp")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 datetime format. Notes that this is the logical time when the event occurred. You can specify an (optional) explicit tracking time with ",(0,i.kt)("inlineCode",{parentName:"td"},"sendAt"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Depends on the event type, this is sometimes required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ditto.")))),(0,i.kt)("p",null,"The above request should response with a ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),"-status response with a body of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"updated": 0}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"0")," here means there's no ",(0,i.kt)("strong",{parentName:"em"},"profile")," get updated from this event).")),(0,i.kt)("p",null,'That newly ingested event can be inspected at "Event Logs" of your Data Source on ',(0,i.kt)("a",{parentName:"p",href:"https://dev.primedata.ai/Prime/en/data-source"},"https://dev.primedata.ai/Prime/en/data-source"),"."))}c.isMDXComponent=!0}}]);