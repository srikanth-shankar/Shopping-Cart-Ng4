// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBAc7hH2fUoe-3vHGcjDKV9HHmH0UrCxtI",
    authDomain: "shoppingcartng4.firebaseapp.com",
    databaseURL: "https://shoppingcartng4.firebaseio.com",
    projectId: "shoppingcartng4",
    storageBucket: "shoppingcartng4.appspot.com",
    messagingSenderId: "961829402524"
  }
};
