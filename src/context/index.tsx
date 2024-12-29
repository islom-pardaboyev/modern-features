import { createContext, useContext, useState } from "react";

type WhichOneContextType = {
  whichOne: string;
  setWhichOne: React.Dispatch<React.SetStateAction<string>>;
};

const WhichOneContext = createContext<WhichOneContextType | undefined>(undefined);

export const WhichOneProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [whichOne, setWhichOne] = useState("");
  return (
    <WhichOneContext.Provider value={{ whichOne, setWhichOne}}>
      {children}
    </WhichOneContext.Provider>
  );
};

export const useWhichOne
 = () => {
  const context = useContext(WhichOneContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};