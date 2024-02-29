import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "Light" | "Dark";

interface ThemeContextType {
  contextTheme: Theme;
  setContextTheme: (theme: Theme) => void;
}

const initialThemeContext: ThemeContextType = {
  contextTheme: "Light",
  setContextTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(initialThemeContext);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [contextTheme, setContextTheme] = useState<Theme>("Light");
  const values: ThemeContextType = { contextTheme, setContextTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
