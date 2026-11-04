
import React, { createContext, useContext, useState } from 'react';

type ThemeColors = {
  background: string;
  card: string;
  text: string;
  secondaryText: string;
  border: string;
  primary: string;
  input: string;
};

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  colors: ThemeColors;
};

const lightColors: ThemeColors = {
  background: '#FFFFFF',
  card: '#F5F5F5',
  text: '#222222',
  secondaryText: '#777777',
  border: '#EEEEEE',
  primary: '#E1306C',
  input: '#F3F3F3',
};

const darkColors: ThemeColors = {
  background: '#121212',
  card: '#242424',
  text: '#FFFFFF',
  secondaryText: '#BBBBBB',
  border: '#383838',
  primary: '#FF5C93',
  input: '#2C2C2C',
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((previous) => !previous);
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}
