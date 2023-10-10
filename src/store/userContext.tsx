"use client";
import { createContext, useContext } from "react";

const UserContext = createContext(null);

const UserProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
