const {init, auth} = require('bookthatapp-sdk').default

let authPromise = auth('{"key": "your_key", "password": "your_secret"}');

console.log('here should be 404 due to no key', authPromise);

const btaApi = init('token')

console.log(btaApi);

// btaApi.deleteBooking({id: 123}).then(function(response) {
//   console.log(response.data);
// }).catch(function (response) {
//   console.log(response);
// });
