// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://www.thesportsdb.com/api/v1/json/3/all_sports.php',
  API_Events: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php',
  API_Events_Detail: 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4328&s=2014-2015',
  API_Event_Result: 'https://www.thesportsdb.com/api/v1/json/3/eventresults.php',
  season: '2014-2015'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
