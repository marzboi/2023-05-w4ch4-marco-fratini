import { PhoneContext } from "./phone.context";

export function PhoneContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    phoneContext: "MAMA",
  };
  return (
    <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
  );
}
