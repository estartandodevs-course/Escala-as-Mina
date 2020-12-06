//colocar os mocks aqui
const athletes = {
  "10": {
    best: {
      name: "Ana Paula Cirilo dos Santos",
      score: "420 pts",
      team: "Bahia Futebol Clube"
    }
  },
  "9": {
    best: {
      name: "Glória Cordeiro Queiroz",
      score: "82 pts",
      team: "Fluminense"
    }
  },
  "8": {
    best: {
      name: "Alan Luiz Araújo",
      score: "71 pts",
      team: "Bahia Futebol Clube"
    }
  },
  "7": {
    best: {
      name: "Breno Nunes",
      score: "112 pts",
      team: "Flamengo"
    }
  },
  "6": {
    best: {
      name: "Gabriely Araújo",
      score: "1 pts",
      team: "Bahia Futebol Clube"
    }
  },
  "5": {
    best: {
      name: "Frederico Bezerra",
      score: "315 pts",
      team: "Bahia Futebol Clube"
    }
  },
  "4": {
    best: {
      name: "Adrielle Bittencourt",
      score: "79 pts",
      team: "Internacional"
    }
  },
  "3": {
    best: {
      name: "Leila Marcia Queiroz Yamagushi",
      score: "970 pts",
      team: "Corinthians"
    }
  },
  "2": {
    best: {
      name: "Marcos Lima",
      score: "999 pts",
      team: "Goiania"
    }
  },
  "1": {
    best: {
      name: "Ana Murdock",
      score: "256 pts",
      team: "Bahia Futebol Clube"
    }
  }
}
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
const player = {
  "10":{best: {
    name: "Breno Natan Teodoro",
    score: "69 pts",
    team: "estartando devs"
  }},  "9":{best: {
    name: "Jonatas Altair Lima",
    score: "210 pts",
    team: "estartando devs"
  }},  "8":{best: {
    name: "Adriele Cristina Ribeiro",
    score: "14 pts",
    team: "estartando devs"
  }},  "7":{best: {
    name: "Adriele Cristina Ribeiro",
    score: "320 pts",
    team: "estartando devs"
  }},  "6":{best: {
    name: "Adriele Cristina Ribeiro",
    score: "69 pts",
    team: "estartando devs"
  }},  "5":{best: {
    name: "Alan Ribeiro de Souza",
    score: "114 pts",
    team: "estartando devs"
  }},  "4":{best: {
    name: "Alan Ribeiro de Souza",
    score: "87 pts",
    team: "estartando devs"
  }},
  "3":{best: {
    name: "Alan Ribeiro de Souza",
    score: "69 pts",
    team: "estartando devs"
  }},
  "2":{best: {
    name: "Breno Natan Teodoro",
    score: "112 pts",
    team: "estartando devs"
  }},
  "1":{best: {
    name: "Breno Natan Teodoro",
    score: "81 pts",
    team: "estartando devs"
  }},
}
const allMatches = {}
const rounds = {}; 
const allRounds = [];
const missingMatches = {};
const totalRounds = getCurrentRound();
const howManyRounds = new Array(totalRounds).fill(0);
howManyRounds.forEach((item, index) => {
  allMatches[index+1] = partidas.slice(0, (1+Math.round(Math.random()*(partidas.length-1))))
  missingMatches[index+1] = Math.round(Math.random()*allMatches[index+1].length);
  rounds[index+1] = Math.round(Math.random()*100000)
  allRounds.push({
    roundNumber: index+1,
    squadsTotal: Math.round(Math.random()*10000)
  });
})

//This mocks backend response
function getItems(division, round, numberPerDivision = 8) {
  const sortedList = allMatches[round]
  const totalDivisions = Math.floor(sortedList.length / numberPerDivision);
  const startIndex = numberPerDivision * division;
  const stopIndex = numberPerDivision * (division + 1);
  const matches = sortedList.slice(startIndex, stopIndex)
  return [totalDivisions, matches]
}
function getMissingMatches(round){
  return missingMatches[round]
}
function getTotalMatches(round){
  const totalMatches = allMatches[round].length;
  return totalMatches
}
function getAthlete(round, key){
  return athletes[round][key] 
}
function getSquad(round, key){
  return player[round][key]
}
function getTotalSquads(round){
    return rounds[round]
  }
function getCurrentRound() {
  return 10
}
function getAllRoundsInfo(totalRounds=10) {
  return allRounds
}
export {getItems, getMissingMatches, getTotalMatches, getAthlete, getSquad, getTotalSquads, getCurrentRound, getAllRoundsInfo}