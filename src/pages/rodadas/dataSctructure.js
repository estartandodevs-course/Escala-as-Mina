const allPlayersScouts = [
  {
    key: "wasPlaying",
    title: "Jogou",
    state: false,
  },
  {
    key: "isCaptain",
    title: "Capitã do time",
    state: false,
  },
  {
    key: "numberGoal",
    title: "Gol",
    state: false,
    value: 0,
  },
  {
    key: "assistanceGoal",
    title: "Assistências",
    state: false,
    value: 0,
  },
  {
    key: "ownGoal",
    title: "Gol Contra",
    state: false,
    value: 0,
  },
  {
    key: "missedPenalty",
    title: "Perdeu Penalti",
    state: false,
    value: 0,
  },
  {
    key: "hasYellowCard",
    title: "Cartão Amarelo",
    state: false,
    value: 0,
  },
  {
    key: "hasRedCard",
    title: "Cartão Vermelho",
    state: false,
  },
];
export const scoutPosition = {
  goleira: [
    ...allPlayersScouts,
    {
      key: "penalty",
      title: "Defendeu Penalti",
      state: false,
      value: 0,
    },
    {
      key: "concededGoal",
      title: "Gol Sofrido",
      state: false,
      value: 0,
    },
  ],
  zagueira: [...allPlayersScouts],
  lateral: [...allPlayersScouts],
  meio: [...allPlayersScouts],
  atacante: [...allPlayersScouts],
};
//I'll need help sctruturing this object
