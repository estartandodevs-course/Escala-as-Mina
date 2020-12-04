//colocar os mocks aqui

const partidas = [ //56 items
    ["90%", "Marilia", "4 x 5", "Flamengo", "33%"],
    ["55%", "Corinthians futebol clube", "0 x 6", "Osasco união de futebol feminino", "100%"],
    ["0%", "Marilia", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Belo Horizonte", "4 x 5", "Flamengo", "33%"],
    ["90%", "Brasilia", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["0%", "Macaé", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Santos", "4 x 5", "Flamengo", "33%"],
    ["90%", "Palmeiras", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["90%", "Inter", "4 x 5", "Flamengo", "33%"],
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
    ["0%", "Macaé", "1 x 3", "Diadema FC", "61%"],
    ["90%", "Marilia", "4 x 5", "Flamengo", "33%"],
    ["55%", "Corinthians futebol clube", "0 x 6", "Osasco união de futebol feminino", "100%"],
    ["0%", "Marilia", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Belo Horizonte", "4 x 5", "Flamengo", "33%"],
    ["90%", "Brasilia", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["0%", "Macaé", "1 x 3", "Diadema FC", "61%"],
    ["12%", "Santos", "4 x 5", "Flamengo", "33%"],
    ["90%", "Palmeiras", "4 x 5", "Gabyzinha ajuda nois", "33%"],
    ["90%", "Inter", "4 x 5", "Flamengo", "33%"],
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
    ["0%", "Macaé", "1 x 3", "Diadema FC", "61%"],
]

//This mocks backend response
function getItems(division, numberPerDivision = 8, sortedList = partidas) {
  const totalDivisions = Math.floor(sortedList.length / numberPerDivision);
  const startIndex = numberPerDivision * division;
  const stopIndex = numberPerDivision * (division + 1);
  return [totalDivisions, sortedList.slice(startIndex, stopIndex)]
}
function getMissingMatches(){
  const totalMatches = partidas.length;
  const missingMatches = Math.floor(Math.random()*totalMatches)
  return missingMatches
}
function getTotalMatches(){
  const totalMatches = partidas.length;
  return totalMatches
}
function getAthlete(key){
  const athletes = {
    best: {
      name: "Ana",
      score: "420 pts",
      team: "Bahia Futebol Clube"
    }
  }
  return athletes[key] 
}
function getTeam(key){
  const player = {
    best: {
      name: "Breno Natan Teodoro",
      score: "69 pts",
      team: "estartando devs"
    }
  }
  return player[key]
}
function getTotalTeams(round){
  const rounds = {
    "0": (Math.random()*1000).toFixed(),
    "-1": (Math.random()*1000).toFixed(),  }
    return rounds[round]
  }
export {getItems, getMissingMatches, getTotalMatches, getAthlete, getTeam, getTotalTeams}