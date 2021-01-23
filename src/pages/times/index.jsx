import { useState } from "react";
import { CriandoUmClube } from "./CriandoUmClube";
import { VincularJogadoras } from "./VincularJogadoras";
import * as C from "../../components";

export const Times = () => {
  // const [addTeam, setAddTeam] = useState(false);
  const [step, setStep] = useState(0);
  // const positionSection = "GOL";

  const addTeamPages = [
    <CriandoUmClube step={step} setStep={setStep} />,
    <VincularJogadoras />,
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
