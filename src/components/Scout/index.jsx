import * as C from "../";
import { getV } from "../../styles";
import { useTheme } from "styled-components";
import Switch from "react-switch";
import { Div } from "./styledScout";

const switchScouts = ["wasPlaying", "isCaptain"];
//you have to provide forms (array of objects, i.e., scouts)
//a setForms (from useState)
//and what item this is scounting
export const Scout = (props) => {
  const { scout, set } = props;
  const theme = useTheme();
  const { state, value } = scout;
  const isSwitch = switchScouts.includes(scout["key"]);

  const decrement = () => {
    const modifiedScout = {
      ...scout,
      value: scout.value === 0 ? 0 : scout.value - 1,
    };
    set(modifiedScout);
  };
  const increment = () => {
    const modifiedScout = { ...scout, value: scout.value + 1 };
    set(modifiedScout);
  };
  const handleState = (event) => {
    const modifiedScout = { ...scout, state: event };
    set(modifiedScout);
  };

  const items = {
    bool: (
      <C.FlexContainer
        direction={isSwitch ? "row" : "column"}
        justify="flex-start"
        align={isSwitch ? "center" : "flex-start"}
        marginBottom="3%"
      >
        <C.Typography
          font="Raleway"
          weight="700"
          size={getV("16px", "h")}
          color={theme.pallete.secondary.lighter}
        >
          {scout.title}
        </C.Typography>
        {isSwitch ? (
          <Div marginLeft>
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              width={62}
              height={24}
              handleDiameter={22}
              onColor={theme.pallete.gray.secondGray}
              offColor={theme.pallete.gray.secondGray}
              onHandleColor={theme.pallete.secondary.main}
              offHandleColor={theme.pallete.alert.main}
              onChange={handleState}
              checked={scout.state}
            />
          </Div>
        ) : (
          <C.FlexContainer justify="flex-start">
            <C.Button
              variation="scout"
              state={state}
              info="yes"
              onClick={() => handleState(true)}
            >
              <C.Typography
                font="Raleway"
                weight="700"
                size={getV("16px", "h")}
                color={
                  state
                    ? theme.pallete.gray.white
                    : theme.pallete.gray.firstGray
                }
              >
                Sim
              </C.Typography>
            </C.Button>
            <C.Button
              variation="scout"
              state={state}
              info="no"
              onClick={() => handleState(false)}
            >
              <C.Typography
                font="Raleway"
                weight="700"
                size={getV("16px", "h")}
                color={
                  state
                    ? theme.pallete.gray.firstGray
                    : theme.pallete.gray.white
                }
              >
                Não
              </C.Typography>
            </C.Button>
          </C.FlexContainer>
        )}
      </C.FlexContainer>
    ),
    number: (
      <C.FlexContainer
        direction="column"
        justify="flex-start"
        align="flex-start"
      >
        <C.Typography
          font="Raleway"
          weight="700"
          size={getV("16px", "h")}
          color={theme.pallete.secondary.lighter}
        >
          {scout.title}
        </C.Typography>
        <C.FlexContainer justify="flex-start">
          <C.Button
            variation="scout"
            state={state}
            info="yes"
            onClick={() => handleState(true)}
          >
            <C.Typography
              font="Raleway"
              weight="700"
              size={getV("16px", "h")}
              color={
                state ? theme.pallete.gray.white : theme.pallete.gray.firstGray
              }
            >
              Sim
            </C.Typography>
          </C.Button>
          <C.Button
            variation="scout"
            state={state}
            info="no"
            onClick={() => handleState(false)}
          >
            <C.Typography
              font="Raleway"
              weight="700"
              size={getV("16px", "h")}
              color={
                state ? theme.pallete.gray.firstGray : theme.pallete.gray.white
              }
            >
              Não
            </C.Typography>
          </C.Button>
          <C.FlexContainer
            justify="space-between"
            width={getV("75px", "w")}
            marginLeft
          >
            <C.Button type="icon" onClick={decrement}>
              <C.Typography
                font="Poppins"
                weight="700"
                size="24px"
                color={theme.pallete.alert.main}
              >
                -
              </C.Typography>
            </C.Button>
            <C.Typography font="Poppins" weight="700" size="24px" color="white">
              {value}
            </C.Typography>
            <C.Button type="icon" onClick={increment}>
              <C.Typography
                font="Poppins"
                weight="700"
                size="24px"
                color="black"
              >
                +
              </C.Typography>
            </C.Button>
          </C.FlexContainer>
        </C.FlexContainer>
      </C.FlexContainer>
    ),
  };
  return items[scout.type];
};
