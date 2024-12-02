var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'http://your-domain.com/api_path',
  headers: {authorization: 'Bearer YOUR_ACCESS_TOKEN_HERE'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});