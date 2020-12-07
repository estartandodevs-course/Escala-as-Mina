import { getV } from "../../styles";
import { FlexContainer } from "../Modal/styledModal";
import { Typography } from "../Typography";
import { Ball, VerticalBar } from "./styledStepper";

export const Stepper = (props) => {
  const { active } = props;
  const steps = [
    { title: "Criando um Clube", subtitle: "Informações básicas do clube" },
    { title: "Vincular jogadoras", subtitle: "Adicione jogadoras ao clube" },
    { title: "Concluir Cadastro", subtitle: "Revise as informações do time" },
  ];

  return (
    <FlexContainer
      justify="flex-start"
      direction="column"
      padding={`${getV("128px", "h")} 16px 0 ${getV("16px", "2")}`}
      height
    >
      {steps.map((item, index) => {
        const isActive = index === active;
        return (
          <FlexContainer
            justify="flex-end"
            marginBottom="40px"
            marginBottomPx
            position="relative"
          >
            <FlexContainer justify="center" direction="column">
              <Typography
                size={getV("24px", "h")}
                align="right"
                font="Poppins"
                weight="700"
                color={isActive ? "#fff" : "rgba(255,255,255,0.5)"}
              >
                {item.title}
              </Typography>
              <Typography size={getV("16px", "h")} weight="300" align="right">
                {item.subtitle}
              </Typography>
            </FlexContainer>
            <Ball opacity={isActive ? "1" : "0.5"}></Ball>
            {index !== steps.length - 1 && <VerticalBar />}
          </FlexContainer>
        );
      })}
    </FlexContainer>
  );
};
