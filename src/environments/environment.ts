// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAo-WDOjDoGDbwlToo06sMp2zEs6H-adtY',
    authDomain: 'angular-crud-firebase-37b54.firebaseapp.com',
    databaseURL:
      'https://angular-crud-firebase-37b54-default-rtdb.firebaseio.com',
    projectId: 'angular-crud-firebase-37b54',
    storageBucket: 'angular-crud-firebase-37b54.appspot.com',
    messagingSenderId: '1057717863820',
    appId: '1:1057717863820:web:d5b15d51480453f48d82a9',
  },
  api: 'http://13.64.22.6:3000/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
