const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (request, response) => response.send('Hello World!'));
app.get('/hello', (req, res) => {
  const user = {
    name: 'Ironhack',
    picture: '/cat.jpeg',
    favorites: ['bcn', 'madrid', 'lisbon'],
    admin: false,
  };
  res.render(`index`, {
    user,
  });
});
app.get('/bye', (req, res) => {
  res.render(`bye`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
