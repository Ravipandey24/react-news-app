import { createContext, useContext, useReducer } from 'react';

export const CountryContext = createContext();
export function CountryProvider({ children }) {
  return (
    <CountryContext.Provider>
        {children}
    </CountryContext.Provider>
  )
}

