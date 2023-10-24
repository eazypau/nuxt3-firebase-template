import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import type { Auth } from "firebase/auth";
// import type { Firestore } from "firebase/firestore";

// interface FirebasePlugin {
//   $auth: Auth;
//   $db: Firestore;
// }

// declare module "#app" {
//   interface NuxtApp extends FirebasePlugin {}
// }

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.FB_API_KEY,
    authDomain: config.public.FB_AUTH_DOMAIN,
    projectId: config.public.FB_PROJECT_ID,
    storageBucket: config.public.FB_STORAGE_BUCKET,
    messagingSenderId: config.public.FB_MESSAGING_SENDER_ID,
    appId: config.public.FB_APP_ID,
    measurementId: config.public.FB_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  // nuxtApp.vueApp.provide("auth", auth);
  // nuxtApp.provide("auth", auth);

  // nuxtApp.vueApp.provide("db", firestore);
  // nuxtApp.provide("db", firestore);

  // need to intentionally return in provide so that it will
  // automatically typed safe it for developer
  return {
    provide: {
      auth,
      db: firestore,
    },
  };
});
