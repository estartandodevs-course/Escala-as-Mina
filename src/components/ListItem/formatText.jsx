import { Typography } from "../";

export default function formatText(data, styles, theme) {
  switch (styles.type) {
    case "ranking":
      return ranking(data, theme);
    case "player":
      return player(data, styles.variation, theme);
    case "dashboard":
      return dashboard(data, theme);
    default:
      return "";
  }
}

function dashboard(data, theme) {
  return (
    <>
      <Typography
        size="1.2rem"
        weight="700"
        color={chooseColor(data.percentageHomePlayers, theme)}
      >
        {data.percentageHomePlayers}
      </Typography>
      <Typography size="1.2rem">{data.homeTeamName}</Typography>

      <Typography
        size="1.2rem"
        weight="700"
        align="center"
        color={theme.pallete.secondary.main}
        gradient
      >
        {data.score}
      </Typography>

      <Typography size="1.2rem" align="right">
        {data.awayTeamName}
      </Typography>

      <Typography
        size="1.2rem"
        weight="700"
        color={chooseColor(data.percentageAwayPlayers, theme)}
        align="right"
      >
        {data.percentageAwayPlayers}
      </Typography>
    </>
  );
}

function chooseColor(number, theme) {
  return Number(number.replace("%", "")) > 50
    ? theme.pallete.secondary.main
    : theme.pallete.alert.main;
}

function ranking(data, theme) {
  return (
    <>
      <span>
        <Typography
          size="22px"
          weight="700"
          color={theme.pallete.secondary.main}
          type="span"
        >
          {data.rank}
        </Typography>
        <Typography
          size="22px"
          weight="700"
          color={theme.pallete.gray.firstGray}
          type="span"
        >
          {` ${data.playerName} `}
        </Typography>
        <Typography
          size="22px"
          weight="700"
          color={theme.pallete.secondary.main}
          type="span"
        >
          {data.squadName}
        </Typography>
      </span>
      <Typography
        size="26px"
        weight="600"
        color={
          data.allPlayersChecked
            ? theme.pallete.secondary.main
            : theme.pallete.gray.firstGray
        }
      >
        {data.athleteAttributed}
      </Typography>
      <Typography size="26px" weight="600" font="Poppins" type="span" gradient>
        {data.points}
      </Typography>
    </>
  );
}

function player(data, variation, theme) {
  const variations = {
    edit: (
      <>
        <Typography size="16px" weight="700" color={theme.pallete.gray.white}>
          {data.number}
        </Typography>
        <Typography
          textTransform="uppercase"
          size="16px"
          weight="700"
          color={theme.pallete.secondary.main}
        >
          {data.positionSection}
        </Typography>
        <Typography
          size="16px"
          weight="700"
          color={theme.pallete.secondary.main}
        >
          {data.name}
        </Typography>
      </>
    ),
    show: (
      <>
        <Typography size="16px" weight="700" color={theme.pallete.gray.white}>
          {data.number}
        </Typography>
        <Typography
          textTransform="uppercase"
          size="16px"
          weight="700"
          color={theme.pallete.secondary.main}
        >
          {data.position}
        </Typography>
        <Typography
          size="16px"
          weight="700"
          color={theme.pallete.secondary.main}
        >
          {data.name}
        </Typography>
      </>
    ),
  };

  return variations[variation];
}
