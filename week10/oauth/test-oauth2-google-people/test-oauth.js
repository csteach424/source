/**
* test-oauth.js
*  - test oauth2 with js
*  - call People API
*  - load profile data
*/

function handleClientLoad() {
        // Load the API client and auth2 library
        gapi.load('client:auth2', initClient);
      }

      function initClient() {
        gapi.client.init({
            apiKey: '__your_api_key__',
            discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
            clientId: '__your_client_id__',
            scope: 'profile'
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
      }

      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          makeApiCall();
        }
      }

      function authClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      function signoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
				console.log("user now signed out...");
      }

      function makeApiCall() {
        gapi.client.people.people.get({
          resourceName: 'people/me',
          personFields: 'names'
        }).then(function(resp) {
          console.log('Hello, ' + resp.result.names[0].givenName);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      }
