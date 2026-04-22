import { type DataGraveyard, getGraveyardData } from "@/utils";
import { createContext, useContext, type ReactNode } from "react";

export type AppContextType = {
  data: DataGraveyard
}

const AppContext = createContext<AppContextType | null>(null)

type AppContextProviderProps = {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const data = getGraveyardData();
  const value: AppContextType = {
    data
  }
  

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext);

  if(!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
}
