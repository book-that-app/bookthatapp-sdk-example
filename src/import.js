import NameWhatYouWant from 'bookthatapp-sdk'

console.log('sdk methods here', NameWhatYouWant);

let auth = NameWhatYouWant.auth('{"key": "your_key", "password": "your_secret"}');

console.log('here should be 404 due to no key', auth);

const btaApi = NameWhatYouWant.init('token')

console.log(btaApi);

// btaApi.deleteBooking({id: 123}).then(function(response) {
//   console.log(response.data);
// }).catch(function (response) {
//   console.log(response);
// });
