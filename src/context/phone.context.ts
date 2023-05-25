import { createContext } from "react";

export type ContextStructure = {
  phoneContext: string;
};

export const PhoneContext = createContext<ContextStructure>(
  {} as ContextStructure
);
