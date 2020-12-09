import * as C from '../../components';
import { useState } from 'react';

export const Rodadas = () => {
  const [formsGoalkeeper, setForms] = useState([
    {
      key: 'wasPlaying',
      title: 'jogou',
      state: false,
    },
    {
      key: 'isCaptain',
      title: 'capitão do time',
      state: false,
    },
    {
      key: 'penalty',
      title: 'defendeu penalti',
      state: false,
      value: 0,
    },
    {
      key: 'concededGoal',
      title: 'Gol Sofrido',
      state: false,
      value: 0,
    },
    {
      key: 'hasYellowCard',
      title: 'gol sofrido',
      state: false,
      value: 0,
    },
    {
      key: 'hasRedCard',
      title: 'gol sofrido',
      state: false,
    },
  ]);
  return (
    <>
      <C.Scout
        forms={formsGoalkeeper}
        set={setForms}
        whatItem="concededGoal"
      ></C.Scout>
      <C.MatchScout />
    </>
  );
};
