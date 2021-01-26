import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "styled-components";
import * as C from "../../../components";
import { Img, Div } from "../styledPage";
import { getV } from "../../../styles";
import alertIcon from "../../../assets/icons/Alert.svg";

export const CreateTeam = ({ step, setStep }) => {
  const theme = useTheme();
  const [teamName, setTeamName] = useState("");
  const [teamInitials, setTeamInitials] = useState("");
  const [teamState, setTeamState] = useState("");
  const [teamColors, setTeamColors] = useState(new Array(3).fill(null));
  const colorConstructor = new Array(3).fill(null);
  const teamObject = {
    teamName,
    teamInitials,
    teamState,
    teamColors,
  };

  const alertText = {
    alertTeamName: "O nome do clube é requerido",
    alertTeamInitials: "A sigla do clube é requerida (3 letras)",
    alertTeamState: "O estado do clube é requerido (2 letras)",
    alertTeamColors: "As cores do time são requeridas (3 cores)",
  };

  const alert = useAlertTeam(teamObject);

  const refColor = useRef(colorConstructor);

  const getHandleColor = useCallback(() => {
    setTeamColors([...refColor.current]);
  }, []);

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
          {colorConstructor.map((item, index) => {
            return (
              <C.InputColor
                ref={refColor}
                key={index}
                position={index}
                onChange={getHandleColor}
              />
            );
          })}
        </C.FlexContainer>
        <C.FlexContainer
          justify="flex-start"
          align="flex-start"
          direction="column"
        >
          {Object.keys(alert).map((item) => {
            return (
              <React.Fragment key={item}>
                {alert[item] && (
                  <C.FlexContainer justify="flex-start" padding="4px 6px">
                    <Img src={alertIcon} alt="alert" />
                    <C.Typography
                      size={getV("24px", "h")}
                      color={theme.pallete.gray.thirdGray}
                      weight="600"
                    >
                      {alertText[item]}
                    </C.Typography>
                  </C.FlexContainer>
                )}
              </React.Fragment>
            );
          })}
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

function useAlertTeam({ teamName, teamInitials, teamState, teamColors }) {
  const [alertTeamName, setAlertTeamName] = useState(isTeamNameBad(teamName));
  const [alertTeamInitials, setAlertTeamInitials] = useState(true);
  const [alertTeamState, setAlertTeamState] = useState(true);
  const [alertTeamColors, setAlertTeamColors] = useState(true);

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

  const alertStates = {
    alertTeamColors,
    alertTeamState,
    alertTeamInitials,
    alertTeamName,
  };
  return alertStates;
}

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
