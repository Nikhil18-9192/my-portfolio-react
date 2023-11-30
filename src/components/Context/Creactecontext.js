import { createContext } from "react";
import initialstate from "./Inititalstate";

const GlobalContext = createContext(initialstate);

export default GlobalContext