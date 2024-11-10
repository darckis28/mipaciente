import { Children, createContext } from "react";

export const ContextPacients = createContext("");
const Context = ({ children }) => {
  return <ContextPacients.Provider>{children}</ContextPacients.Provider>;
};
export default Context;
