const allPlayersScouts = [
  {
    key: "wasPlaying",
    title: "Jogou",
    state: false,
    type: "bool",
  },
  {
    key: "isCaptain",
    title: "Capitã do time",
    state: false,
    type: "bool",
  },
  {
    key: "numberGoal",
    title: "Gol",
    state: false,
    value: 0,
    type: "number",
  },
  {
    key: "assistanceGoal",
    title: "Assistências",
    state: false,
    value: 0,
    type: "number",
  },
  {
    key: "ownGoal",
    title: "Gol Contra",
    state: false,
    value: 0,
    type: "number",
  },
  {
    key: "missedPenalty",
    title: "Perdeu Penalti",
    state: false,
    value: 0,
    type: "number",
  },
  {
    key: "hasYellowCard",
    title: "Cartão Amarelo",
    state: false,
    value: 0,
    type: "number",
  },
  {
    key: "hasRedCard",
    title: "Cartão Vermelho",
    state: false,
    type: "bool",
  },
];
export const scoutPosition = {
  goleira: [
    ...allPlayersScouts,
    {
      key: "defendedPenalty",
      title: "Defendeu Penalti",
      state: false,
      value: 0,
      type: "number",
    },
    {
      key: "concededGoal",
      title: "Gol Sofrido",
      state: false,
      value: 0,
      type: "number",
    },
  ],
  zagueira: [...allPlayersScouts],
  lateral: [...allPlayersScouts],
  meio: [...allPlayersScouts],
  atacante: [...allPlayersScouts],
};
