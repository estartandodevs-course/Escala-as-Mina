import { ListItem } from "../components";

function Login() {
  return <h2>Login</h2>;
}
function Dashboard() {
  return (
    <div>
      dashboard
      <ListItem type="dashboard">
        {["51%", "Corinthians", "3 x 4", "Palmeiras", "54%"]}
      </ListItem>
      player
      <ListItem type="player">
        {["02", "GOL", "Sarah Gomes Alves da Silva"]}
      </ListItem>
      player edit
      <ListItem type="player" variation="edit">
        {["02", "GOL", "Sarah Gomes Alves da Silva"]}
      </ListItem>
      ranking
      <ListItem>
        {["#1 - Rogerinho tretudo - 1 Real de bigbig - RRB", "8/12", "45 pts"]}
      </ListItem>
      add
      {/* <ListItem type="player" variation="add"></ListItem> */}
    </div>
  );
  // <h2>Dashboard</h2>;
}
function Rodadas() {
  return <h2>Rodadas</h2>;
}
function Jogadoras() {
  return <h2>Jogadoras</h2>;
}
function Times() {
  return <h2>Times</h2>;
}
function Ranking() {
  return <h2>Ranking</h2>;
}

export { Login, Dashboard, Rodadas, Jogadoras, Times, Ranking };
