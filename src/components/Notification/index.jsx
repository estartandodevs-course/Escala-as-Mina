import check from "../../assets/icons/WhiteAcceptBtn.svg";
import { Button, Card, Typography } from "../";
import { useTheme } from "styled-components";
import { getV } from "../../styles";
import { Div, FadeIn, FadeOut } from "./styledNotification";
import Animate from "animate-css-styled-components";
import { useState } from "react";

export const Notification = (props) => {
  const theme = useTheme();
  const { user } = props;
  const [show, setShow] = useState("show");
  return (
    <Animate
      Animation={[FadeIn, FadeOut]}
      duration={["2s", "1s"]}
      delay={["0.5s", "3s"]}
    >
      <Card
        width={getV("400px", "w")}
        height={getV("64px", "h")}
        backgroundColor="#fff"
        padding="0"
        position="absolute"
        right={getV("64px", "h")}
        top={getV("64px", "h")}
        show={show}
      >
        <Div>
          <Button
            size={getV("32px", "h")}
            type="icon"
            variation="secondary"
            position="absolute"
            rounded
            left={getV("12px", "h")}
            top={getV("12px", "h")}
          >
            <img src={check} alt="check" />
          </Button>
          <Typography
            color={theme.pallete.gray.thirdGray}
            weight="600"
            size={getV("24px", "h")}
            font="Poppins"
          >
            Olá, {user.name}!
          </Typography>
          <Typography
            color={theme.pallete.gray.firstGray}
            weight="900"
            size={getV("12px", "h")}
          >
            Autentificação realizada com sucesso
          </Typography>
          <Button
            position="absolute"
            right={getV("12px", "h")}
            top={getV("12px", "h")}
            type="icon"
            onClick={() => setShow("dontShow")}
          >
            X
          </Button>
        </Div>
      </Card>
    </Animate>
  );
};
