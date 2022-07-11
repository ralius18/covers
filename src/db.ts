import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

const app = firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
})
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LfLgt4gAAAAAJcmapqbBIlF7Xo2o-Z0EiRB9cwR')
})

export const db = app.firestore()
