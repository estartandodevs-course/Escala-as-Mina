import { useState } from "react";
import { useTheme } from "styled-components";
import { Typography, Card, Button } from "../";
import { getV } from "../../styles";
import * as S from "./styledModal";
import deletar from "../../assets/icons/Deletar.svg";
import upload from "../../assets/icons/Upload.svg";
import check from "../../assets/icons/WhiteAcceptBtn.svg";

const Modal = (props) => {
  const { show, setShow, allRoundsInfo, currentRound, setShownRound } = props;
  allRoundsInfo.sort((a, b) => {
    if (a.roundNumber > b.roundNumber) return -1;
    else return 1;
  });
  const theme = useTheme();
  const [bg, setBg] = useState();
  const modalSetter = getRadioCheck(setBg);

  return (
    <S.ModalWrapper show={show}>
      <Card size="extraLarge">
        <S.FlexContainer
          direction="column"
          justify="flex-start"
          marginLeft
          marginRight
        >
          <S.FlexContainer marginBottom="32px" justify="space-between">
            <Typography marginBottom="10px" weight="700" size="40px" type="h2">
              Gerenciar Rodadas
            </Typography>
            <Button type="icon" onClick={() => setShow(false)}>
              X
            </Button>
          </S.FlexContainer>
          <S.ModalList>
            <S.Form>
              <S.ModalHeader />
              {allRoundsInfo.map((item, index) => {
                return (
                  <S.ModalListItem
                    key={("round", index)}
                    column="1fr 3fr 3fr 3fr 3fr"
                    as="li"
                  >
                    <div>
                      <S.Input
                        name="round"
                        type="radio"
                        id={`${item.roundNumber}`}
                        onChange={modalSetter}
                      />
                      <S.Label htmlFor={`${item.roundNumber}`}>
                        <S.FlexContainer justify="center">
                          <S.Img src={check} />
                        </S.FlexContainer>
                      </S.Label>
                    </div>
                    <Typography
                      color={theme.pallete.gray.black}
                      weight="700"
                      size={getV("32px", "h")}
                      type="p"
                    >
                      Rodada {item.roundNumber}
                    </Typography>
                    <Typography
                      size={getV("32px", "h")}
                      color={theme.pallete.gray.firstGray}
                      type="p"
                    >
                      {item.squadsTotal} Times
                    </Typography>
                    <S.ModalTag current={item.roundNumber === currentRound}>
                      {item.roundNumber === currentRound
                        ? "Rodada atual"
                        : "Rodada finalizada"}
                    </S.ModalTag>
                    <S.FlexContainer justify="center">
                      <Button type="icon">
                        <img src={upload} alt="upload" />
                      </Button>
                      <Button type="icon">
                        <img src={deletar} alt="deletar" />
                      </Button>
                    </S.FlexContainer>
                  </S.ModalListItem>
                );
              })}
            </S.Form>
          </S.ModalList>
          <S.FlexContainer justify="flex-start">
            <Button
              variation="disabled"
              size="small"
              onClick={() => setShow(false)}
              marginRight={getV("32px", "w")}
            >
              <Typography
                size={getV("21px", "h")}
                weight="600"
                font="Roboto"
                color={theme.pallete.gray.white}
                type="span"
              >
                Cancelar
              </Typography>
            </Button>
            <Button
              variation="active"
              size="small"
              onClick={() => {
                setShow(false);
                setShownRound(bg);
              }}
            >
              <Typography
                size={getV("21px", "h")}
                weight="600"
                font="Roboto"
                color={theme.pallete.gray.white}
                type="span"
              >
                Selecionar
              </Typography>
            </Button>
          </S.FlexContainer>
        </S.FlexContainer>
      </Card>
    </S.ModalWrapper>
  );
};

function getRadioCheck(set) {
  const setValue = set;
  function radioCheck(event) {
    const liActive = event.target.parentElement.parentElement;
    const allLi = liActive.parentElement.children;
    setValue(event.target.id);

    for (let i = 0; i < allLi.length; i++) {
      allLi.item(i).classList.remove("active");
    }
    liActive.classList.add("active");
  }
  return radioCheck;
}

export { Modal };
