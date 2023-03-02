import { AuthCredential } from "@/function/firebase/auth";
import { createContext, useContext } from "react";

interface AuthContext {
  user: AuthCredential | false;
  setUser: (data: AuthCredential | false) => void;
}

const userContext = createContext<AuthContext>({
  user: false,
  setUser: () => {},
});

export const AuthProvider = userContext.Provider;
export const useAuth = () => useContext(userContext);
