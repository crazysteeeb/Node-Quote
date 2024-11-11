const axios = require('axios');

axios.get('https://zenquotes.io/api/random')
  .then(response => {
    const quote = response.data[0].q;
    const author = response.data[0].a;

    console.log(`Here's a motivational quote for you: \n"${quote}" - ${author}`);
  })
  .catch(error => {
    console.error('Could not fetch a quote. Try again later.', error);
  });
