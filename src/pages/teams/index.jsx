import { useState } from "react";
import * as PC from "./pageComponents";
import * as C from "../../components";

export const Teams = () => {
  const [step, setStep] = useState(0);

  const addTeamPages = [
    <PC.CreateTeam step={step} setStep={setStep} />,
    <PC.LinkPlayers />,
  ];
  return (
    <>
      <C.Head title="times" />
      {addTeamPages[step]}
      <C.Sidebar variation="right">
        <C.Stepper active={step} />
      </C.Sidebar>
    </>
  );
};
