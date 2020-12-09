import * as C from '../';
import { getV } from '../../styles';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

//you have to provide forms (array of objects, i.e., scouts)
//a setForms (from useState)
//and what item this is scounting
const Scout = (props) => {
  const { forms, set, whatItem } = props;
  const form = forms.filter((input) => input.key === whatItem)[0];
  const indexForms = forms.indexOf(form);
  const theme = useTheme();
  const [localValue, setLocalValue] = useState(form.value);
  const [localState, setLocalState] = useState(form.state);

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
      const temp = [...forms];
      temp[indexForms].value = localValue;
      console.log(temp);
      console.log(localValue);
      return temp;
    });
  }, [localValue, indexForms, set]);
  useEffect(() => {
    set((forms) => {
      const temp = [...forms];
      temp[indexForms].state = localState;
      return temp;
    });
  }, [localState, indexForms, set, localValue]);

  return (
    <C.FlexContainer direction="column" justify="flex-start" align="flex-start">
      <C.Typography
        font="Raleway"
        weight="700"
        size={getV('16px', 'h')}
        color={theme.pallete.secondary.lighter}
      >
        {form.title}
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
            size={getV('16px', 'h')}
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
            size={getV('16px', 'h')}
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
          width={getV('75px', 'w')}
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
            onClick={() => setLocalValue((current) => Number(current) + 1)}
          >
            <C.Typography font="Poppins" weight="700" size="24px" color="black">
              +
            </C.Typography>
          </C.Button>
        </C.FlexContainer>
      </C.FlexContainer>
    </C.FlexContainer>
  );
};

export { Scout };
