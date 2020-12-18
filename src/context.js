import { createContext } from "react";
import * as M from "./mocks";

const { currentRound } = M.getCurrentRound();
const roundContext = createContext(currentRound);
export { roundContext };
