const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const matches = [];

  for (const mutant of mutants) {
    if (mutant.power.toLowerCase() === power.toLowerCase()) {
      matches.push(mutant.name);
    }
  }

  //verificamos si encontramos algo
  if (matches.length > 0) {
    return `Se han encontrado mutantes con el poder "${power}": ${matches.join(', ')}.`;
  } else {
    return `No se ha encontrado mutante con el poder "${power}".`;
  }
}


console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'super speed'));