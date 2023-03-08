import { createContext, useContext } from "react";

interface MateriContext {
  total: number;
  value: number;
  setValue: (e: number | ((e: number) => number)) => void;
  setTotal: (e: number) => void;
}

const materiContext = createContext<MateriContext>({
  total: NaN,
  value: NaN,
  setValue: (e) => {},
  setTotal: (e) => {},
});

export const MateriProvider = materiContext.Provider;
export const useMateri = () => useContext(materiContext);
