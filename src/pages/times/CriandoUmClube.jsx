import { useEffect, useRef, useState, useCallback } from "react";
import * as C from "../../components";
import alert from "../../assets/icons/Alert.svg";
import { getV } from "../../styles";
import { Img, Div } from "./styledPage";
import { useTheme } from "styled-components";

export const CriandoUmClube = ({ step, setStep }) => {
  const theme = useTheme();
  const [teamName, setTeamName] = useState("");
  const [teamInitials, setTeamInitials] = useState("");
  const [teamState, setTeamState] = useState("");
  const [teamColors, setTeamColors] = useState(new Array(3).fill(null));
  const [alertTeamName, setAlertTeamName] = useState(isTeamNameBad(teamName));
  const [alertTeamInitials, setAlertTeamInitials] = useState(true);
  const [alertTeamState, setAlertTeamState] = useState(true);
  const [alertTeamColors, setAlertTeamColors] = useState(true);
  const colorConstructor = new Array(3).fill(null);
  useEffect(() => {
    setAlertTeamName(isTeamNameBad(teamName));
  }, [teamName]);
  useEffect(() => {
    setAlertTeamInitials(isTeamInitialsBad(teamInitials));
  }, [teamInitials]);
  useEffect(() => {
    setAlertTeamState(isTeamStateBad(teamState));
  }, [teamState]);
  useEffect(() => {
    setAlertTeamColors(isTeamColorsBad(teamColors));
  }, [teamColors]);

  const teamObject = {
    teamName,
    teamInitials,
    teamState,
    teamColors,
  };

  const refColor = useRef(colorConstructor);

  const getHandleColor = useCallback(() => {
    setTeamColors([...refColor.current]);
  }, []);

  console.log(teamObject);

  return (
    <>
      <C.FlexContainer
        width="47vw"
        direction="column"
        justify="flex-start"
        align="flex-start"
      >
        <C.FlexContainer marginBottom="40px">
          <C.Typography type="h1" align="left" color={theme.pallete.gray.black}>
            Vamos começar com algumas informações do time.
          </C.Typography>
        </C.FlexContainer>
        <C.Input onChange={setTeamName} label="Nome do Clube" team />
        <C.Input onChange={setTeamInitials} label="Sigla do Clube" team />
        <C.Input onChange={setTeamState} label="Estado do Clube" team />
        <C.Typography
          type="p"
          color={theme.pallete.primary.darker}
          size="24px"
          font="Roboto"
        >
          Selecione as cores do clube
        </C.Typography>
        <C.FlexContainer justify="flex-start" marginBottom="32px">
          {colorConstructor.map((item, index) => (
            <C.InputColor
              ref={refColor}
              key={index}
              position={index}
              onChange={getHandleColor}
            />
          ))}
        </C.FlexContainer>
        <C.FlexContainer
          justify="flex-start"
          align="flex-start"
          direction="column"
        >
          {alertTeamName && (
            <C.FlexContainer justify="flex-start" padding="4px 6px">
              <Img src={alert} alt="alert" />
              <C.Typography
                size={getV("24px", "h")}
                color={theme.pallete.gray.thirdGray}
                weight="600"
              >
                O nome do clube é requerido
              </C.Typography>
            </C.FlexContainer>
          )}
          {alertTeamInitials && (
            <C.FlexContainer justify="flex-start" padding="4px 6px">
              <Img src={alert} alt="alert" />
              <C.Typography
                size={getV("24px", "h")}
                color={theme.pallete.gray.thirdGray}
                weight="600"
              >
                A sigla do clube é requerida (3 letras)
              </C.Typography>
            </C.FlexContainer>
          )}
          {alertTeamState && (
            <C.FlexContainer justify="flex-start" padding="4px 6px">
              <Img src={alert} alt="alert" />
              <C.Typography
                size={getV("24px", "h")}
                color={theme.pallete.gray.thirdGray}
                weight="600"
              >
                O estado do clube é requerido (2 letras)
              </C.Typography>
            </C.FlexContainer>
          )}
          {alertTeamColors && (
            <C.FlexContainer justify="flex-start" padding="4px 6px">
              <Img src={alert} alt="alert" />
              <C.Typography
                size={getV("24px", "h")}
                color={theme.pallete.gray.thirdGray}
                weight="600"
              >
                As cores do time são requeridas (3 cores)
              </C.Typography>
            </C.FlexContainer>
          )}
        </C.FlexContainer>
        <Div>
          <C.Button
            variation="active"
            size="small"
            onClick={() => setStep(step + 1)}
          >
            <C.Typography
              size={getV("24px", "h")}
              font="Poppins"
              color={theme.pallete.gray.black}
              weight="700"
            >
              Continuar
            </C.Typography>
          </C.Button>
        </Div>
      </C.FlexContainer>
    </>
  );
};

function isTeamNameBad(teamName) {
  return teamName.length < 5;
}
function isTeamStateBad(teamName) {
  return teamName.length !== 2; //should check if contains number. how?
}
function isTeamInitialsBad(teamName) {
  return teamName.length !== 3;
}
function isTeamColorsBad(teamColors) {
  return teamColors.includes(null);
}
