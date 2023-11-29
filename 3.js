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
    url: 'https://www.wikipedia.org/wiki/Oxygen',
  },
];

// Access the oxygen object using the url property
const oxygenObject = elements.find(element => element.name === 'Oxygen');
const oxygenURL = oxygenObject.url;
console.log(oxygenURL);
