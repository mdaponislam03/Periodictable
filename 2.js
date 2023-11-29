const express = require('express');
const app = express();
const port = 3000;
const { name, symbol, atomicNumber, atomicMass } = elements[1];


app.get('/elements', (req, res) => {
  const elements = [
    {
      name: 'Hydrogen',
      symbol: 'H',
      atomicNumber: 1,
      atomicMass: 1.008,
    },
    {
      name: 'Oxygen',
      symbol: 'O',
      atomicNumber: 8,
      atomicMass: 15.999,
    },
  ];

  res.json(elements);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
