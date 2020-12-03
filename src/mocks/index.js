//colocar os mocks aqui

const partidas = [ //28 items
    ["90%", "Marilia", "4 x 5", "Flamengo", "33%"],
    ["55%", "Corinthians futebol clube", "0 x 6", "Osasco união de futebol feminino", "100%"],
    ["0%", "Marilia", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Belo Horizonte", "4 x 5", "Flamengo", "33%"],
    ["90%", "Brasilia", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["0%", "Macaé", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Santos", "4 x 5", "Flamengo", "33%"],
    ["90%", "Palmeiras", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["90%", "pagin2 Inter", "4 x 5", "Flamengo", "33%"],
    ["12%", "Belo Horizonte", "4 x 5", "Flamengo", "33%"],
    ["90%", "Brasilia", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["0%", "Macaé", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Santos", "4 x 5", "Flamengo", "33%"],
    ["90%", "Palmeiras", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["90%", "Inter", "4 x 5", "Flamengo", "33%"],
    ["55%", "Corinthians futebol clube", "0 x 6", "Osasco união de futebol feminino", "100%"],
    ["0%", "Marilia", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Belo Horizonte", "4 x 5", "Flamengo", "33%"],
    ["12%", "Belo Horizonte", "4 x 5", "Flamengo", "33%"],
    ["90%", "Brasilia", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["0%", "Macaé", "1 x 3", "Diadema FC", "61%"]
]

//This mocks backend response
export function getItems(division, numberPerDivision = 8, sortedList = partidas) {
  const totalDivisions = Math.floor(sortedList.length / numberPerDivision);
  const startIndex = numberPerDivision * division;
  const stopIndex = numberPerDivision * (division + 1);
  return [totalDivisions, sortedList.slice(startIndex, stopIndex)]
}