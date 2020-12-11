import * as C from "../";
import { getV } from "../../styles";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import Switch from "react-switch";
import { Div } from "./styledScout";

const switchScouts = ["wasPlaying", "isCaptain"];
//you have to provide forms (array of objects, i.e., scouts)
//a setForms (from useState)
//and what item this is scounting
const Scout = (props) => {
  const { scout, set, index } = props;
  const theme = useTheme();

  const isSwitch = switchScouts.includes(scout["key"]);

  const [localValue, setLocalValue] = useState(scout.value);
  const [localState, setLocalState] = useState(scout.state);

  function handleLessValue() {
    setLocalValue((current) => {
      if (current === 0) {
        return 0;
      } else {
        return current - 1;
      }
    });
  }

  useEffect(() => {
    if (localValue > 0) setLocalState(true);
    else setLocalState(false);
    set((forms) => {
      const temp = { ...forms };

      temp[index].state = localState;
      temp[index].value = localValue;
      return temp;
    });
  }, [localValue, localState, index, set]);

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
              onChange={(event) => setLocalState(event)}
              checked={localState}
            />
          </Div>
        ) : (
          <C.FlexContainer justify="flex-start">
            <C.Button
              variation="scout"
              state={localState}
              info="yes"
              onClick={() => setLocalState(true)}
            >
              <C.Typography
                font="Raleway"
                weight="700"
                size={getV("16px", "h")}
                color={
                  localState
                    ? theme.pallete.gray.white
                    : theme.pallete.gray.firstGray
                }
              >
                Sim
              </C.Typography>
            </C.Button>
            <C.Button
              variation="scout"
              state={localState}
              info="no"
              onClick={() => setLocalState(false)}
            >
              <C.Typography
                font="Raleway"
                weight="700"
                size={getV("16px", "h")}
                color={
                  localState
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
            state={localState}
            info="yes"
            onClick={() => setLocalState(true)}
          >
            <C.Typography
              font="Raleway"
              weight="700"
              size={getV("16px", "h")}
              color={
                localState
                  ? theme.pallete.gray.white
                  : theme.pallete.gray.firstGray
              }
            >
              Sim
            </C.Typography>
          </C.Button>
          <C.Button
            variation="scout"
            state={localState}
            info="no"
            onClick={() => setLocalState(false)}
          >
            <C.Typography
              font="Raleway"
              weight="700"
              size={getV("16px", "h")}
              color={
                localState
                  ? theme.pallete.gray.firstGray
                  : theme.pallete.gray.white
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
            <C.Button type="icon" onClick={handleLessValue}>
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
              {localValue}
            </C.Typography>
            <C.Button
              type="icon"
              onClick={() => setLocalValue((current) => current + 1)}
            >
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
// }
// // useEffect(() => {
// //   set((forms) => {
// //     const temp = { ...forms };
// //     temp["players"][indexPlayer]["scouts"][indexScout].state = localState;
// //     return temp;
// //   });
// // }, [localState, indexScout, indexPlayer, set]);

// const { ...restProps } = props;
// const { forms, whatItem, player } = restProps;
// const players = forms["players"];
// const playerItem = players.filter((input) => input.name === player)[0];
// const scout = playerItem["scouts"].filter(
//   (input) => input.key === whatItem
// )[0];

// if (scout["value"] !== undefined) {
//   return <ScoutNumber {...restProps} />;
// } else {
//   return <ScoutBool {...restProps} />;

export { Scout };

// const ScoutBool = (props) => {
//   const { forms, set, whatItem, player } = props;
//   const theme = useTheme();

//   const players = forms["players"];
//   const playerItem = players.filter((input) => input.name === player)[0];
//   const indexPlayer = players.indexOf(playerItem);
//   const scout = playerItem.scouts.filter((input) => input.key === whatItem)[0];
//   const indexScout = playerItem.scouts.indexOf(scout);

//   const [localState, setLocalState] = useState(scout.state);

//   useEffect(() => {
//     set((forms) => {
//       const temp = { ...forms };
//       temp["players"][indexPlayer]["scouts"][indexScout].state = localState;
//       return temp;
//     });
//   }, [localState, indexScout, indexPlayer, set]);
//   return (

//   );
// };

// const ScoutNumber = (props) => {
//   const { forms, set, whatItem, player } = props;
//   const theme = useTheme();

//   const players = forms["players"];
//   const playerItem = players.find((input) => input.name === player);
//   const indexPlayer = players.indexOf(playerItem);
//   const scout = playerItem.scouts.find((input) => input.key === whatItem);
//   const indexScout = playerItem.scouts.indexOf(scout);

//   const [localValue, setLocalValue] = useState(scout.value);
//   const [localState, setLocalState] = useState(scout.state);

//   function handleLessValue() {
//     setLocalValue((current) => {
//       if (current === 0) {
//         return 0;
//       } else {
//         return current - 1;
//       }
//     });
//   }

//   useEffect(() => {
//     if (localValue > 0) setLocalState(true);
//     else setLocalState(false);
//     set((forms) => {
//       const temp = { ...forms };

//       temp["players"][indexPlayer]["scouts"][indexScout].value = localValue;
//       return temp;
//     });
//   }, [localValue, indexScout, indexPlayer, set]);
//   useEffect(() => {
//     set((forms) => {
//       const temp = { ...forms };
//       temp["players"][indexPlayer]["scouts"][indexScout].state = localState;
//       return temp;
//     });
//   }, [localState, indexScout, indexPlayer, set]);

//   return (

//   );
// };
