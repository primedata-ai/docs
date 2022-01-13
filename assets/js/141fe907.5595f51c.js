"use strict";(self.webpackChunkprime_docs=self.webpackChunkprime_docs||[]).push([[995],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Install PrimeData Web SDKs",p={unversionedId:"setup/install-js-sdk",id:"setup/install-js-sdk",title:"Install PrimeData Web SDKs",description:"Follow step by step below to install PrimeData JS SDK",source:"@site/docs/setup/install-js-sdk.md",sourceDirName:"setup",slug:"/setup/install-js-sdk",permalink:"/docs/docs/setup/install-js-sdk",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Register an Event Schema",permalink:"/docs/docs/setup/creating-event-schema"},next:{title:"Events Tracking API",permalink:"/docs/docs/events-tracking"}},c=[{value:"Follow step by step below to install PrimeData JS SDK",id:"follow-step-by-step-below-to-install-primedata-js-sdk",children:[],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-primedata-web-sdks"},"Install PrimeData Web SDKs"),(0,a.kt)("h3",{id:"follow-step-by-step-below-to-install-primedata-js-sdk"},"Follow step by step below to install PrimeData JS SDK"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create new file ",(0,a.kt)("strong",{parentName:"li"},"OneSignalSDKWorker.js")," contain content below into root folder of project:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create new file ",(0,a.kt)("strong",{parentName:"li"},"firebase-messaging-sw.js")," contain content below into root folder of project:")),(0,a.kt)("p",null,"a. Content file ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase-messaging-sw.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'importScripts("https://dev.primedata.ai/cdn/sdk/firebase-messaging-sw.js");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create new file ",(0,a.kt)("strong",{parentName:"li"},"posjs-worker.js")," contain content below into root folder of project:\nb. Content file ",(0,a.kt)("inlineCode",{parentName:"li"},"posjs-worker.js"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'importScripts("https://dev.primedata.ai/cdn/sdk/posjs-worker.js");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add JS SDK in the root folder:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\n !function(){var follower=window.follower=window.follower||[];if(!follower.initialize)if(follower.invoked)window.console&&console.error&&console.error("PrimeDATA snippet included twice.");else{follower.invoked=!0;follower.methods=["initOneSignal", "initWebPush","initWebPopup","utils","trackSubmit","trackClick","trackLink","trackForm","pageview","personalize","identify","initialize","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];follower.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);follower.push(e);return follower}};for(var t=0;t<follower.methods.length;t++){var e=follower.methods[t];follower[e]=follower.factory(e)}follower.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://dev.primedata.ai/powehi/mining.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);follower._loadOptions=e};follower.SNIPPET_VERSION="0.1.0";\n    follower.load();\n    const primeJsOpts = {\n      scope: <YOUR-SCOPE>,\n      url: \'https://dev.primedata.ai/powehi\',\n      writeKey: <YOUR-WRITE-KEY>,\n      initialPageProperties: {\n        pageInfo: { \n         destinationURL: location.href\n        }\n      },\n      detectAdBlock: {\n        enable: false,\n        bannerMessage: "You are on the ad blocker. Our feature does not work well when your ad blocker is enabled on this site. To fully enjoy the service, please disable the ad blocker on our site. We guarantee that there will be no ads on our site.",\n        closeButtonLabel: "close"\n      },\n      webPush: {\n        enabled: false,\n        options: {\n          showLogs: false,\n          endpoint: \'https://dev.primedata.ai\',\n          firebaseMessagingSwUrl: "./firebase-messaging-sw.js",\n          firebaseConfig: {\n            authDomain: <authDomain>,\n            projectId: <projectId>,\n            storageBucket: <storageBucket>,\n            messagingSenderId: <messagingSenderId>,\n            appId: <appId>,\n            apiKey: <apiKey>\n          }\n        }\n      },\n      webPopup: {\n        enabled: true,\n        options: {\n          showLogs: true,\n          onsiteWorkerPath: "./posjs-worker.js",\n          endpoint: \'https://dev.primedata.ai\'\n        }\n      },\n      oneSignal: {\n        enabled: false,\n        options: {\n          showLogs: false,\n          embedOneSignalSDK: false,\n          appId: <appId>\n        }\n      }\n    };\n    follower.initialize({"Prime Data": primeJsOpts})\n    \n    if (primeJsOpts.webPush && primeJsOpts.webPush.enabled) {\n      if (firebase && !firebase.apps.length) {\n        firebase.initializeApp(primeJsOpts.webPush.options.firebaseConfig);\n      }\n      follower.initWebPush(primeJsOpts.webPush.options);\n    }\n  \n    if(primeJsOpts.webPopup && primeJsOpts.webPopup.enabled){\n      follower.initWebPopup(primeJsOpts);\n    }\n    \n    if (primeJsOpts.oneSignal && primeJsOpts.oneSignal.enabled) {\n      follower.initOneSignal(primeJsOpts);\n    }\n  }}();\n<\/script>\n')))}d.isMDXComponent=!0}}]);