# How to install PrimeData JS SDK

### Follow step by step below to install PrimeData JS SDK:

- Create new file **OneSignalSDKWorker.js** contain content below into root folder of project:
```javascript
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
```

- Create new file **firebase-messaging-sw.js** contain content below into root folder of project:

a. Content file `firebase-messaging-sw.js`:
```javascript
importScripts("https://primedata.aristino.com/cdn/sdk/firebase-messaging-sw.js");
```

- Create new file **posjs-worker.js** contain content below into root folder of project:
b. Content file `posjs-worker.js`:
```javascript
importScripts("https://primedata.aristino.com/cdn/sdk/posjs-worker.js");
```

- Add JS SDK (on aristino.com) in the root folder:
```javascript
<script>
 !function(){var follower=window.follower=window.follower||[];if(!follower.initialize)if(follower.invoked)window.console&&console.error&&console.error("PrimeDATA snippet included twice.");else{follower.invoked=!0;follower.methods=["initOneSignal", "initWebPush","initWebPopup","utils","trackSubmit","trackClick","trackLink","trackForm","pageview","personalize","identify","initialize","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];follower.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);follower.push(e);return follower}};for(var t=0;t<follower.methods.length;t++){var e=follower.methods[t];follower[e]=follower.factory(e)}follower.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://primedata.aristino.com/powehi/mining.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);follower._loadOptions=e};follower.SNIPPET_VERSION="0.1.0";
    follower.load();
    const primeJsOpts = {
      scope: 'JS-1rNSiugS2Ymue2sFSKZfQsOfrGS',
      url: 'https://primedata.aristino.com/powehi',
      writeKey: '1rNSivbljtItN2nM5opiNT3faqz',
      initialPageProperties: {
        pageInfo: {
         destinationURL: location.href
        }
      },
      detectAdBlock: {
        enable: false,
        bannerMessage: "You are on the ad blocker. Our feature does not work well when your ad blocker is enabled on this site. To fully enjoy the service, please disable the ad blocker on our site. We guarantee that there will be no ads on our site.",
        closeButtonLabel: "close"
      },
      webPush: {
        enabled: false,
        options: {
          showLogs: false,
          endpoint: 'https://primedata.aristino.com',
          firebaseMessagingSwUrl: "./firebase-messaging-sw.js",
          firebaseConfig: {
            authDomain: "aristino-webpush.firebaseapp.com",
            projectId: "aristino-webpush",
            storageBucket: "aristino-webpush.appspot.com",
            messagingSenderId: "839057798326",
            appId: "1:839057798326:web:c1c02082bdb2c52336e217",
            apiKey: "AIzaSyCpP5Z1ZEAWj85sMGCPGEUoZpJRtP1GbQI"
          }
        }
      },
      webPopup: {
        enabled: true,
        options: {
          showLogs: true,
          onsiteWorkerPath: "./posjs-worker.js",
          endpoint: 'https://primedata.aristino.com'
        }
      },
      oneSignal: {
        enabled: false,
        options: {
          showLogs: false,
          embedOneSignalSDK: false,
          appId: "679be029-5cd1-4353-9d24-cc563201468e"
        }
      }
    };
    follower.initialize({"Prime Data": primeJsOpts})
    
    if (primeJsOpts.webPush && primeJsOpts.webPush.enabled) {
      if (firebase && !firebase.apps.length) {
        firebase.initializeApp(primeJsOpts.webPush.options.firebaseConfig);
      }
      follower.initWebPush(primeJsOpts.webPush.options);
    }
  
    if(primeJsOpts.webPopup && primeJsOpts.webPopup.enabled){
      follower.initWebPopup(primeJsOpts);
    }
    
    if (primeJsOpts.oneSignal && primeJsOpts.oneSignal.enabled) {
      follower.initOneSignal(primeJsOpts);
    }
  }}();
</script>
```