import btaSdk from 'bookthatapp-sdk'

let auth = btaSdk.auth('{"key": "your_key", "password": "your_secret"}');

const btaApi = btaSdk.init('token')

console.log('sdk methods here', btaSdk);

console.log('here should be 404 due to no key', auth);

console.log(btaApi);

// btaApi.deleteBooking({id: 123}).then(function(response) {
//   console.log(response.data);
// }).catch(function (response) {
//   console.log(response);
// });
