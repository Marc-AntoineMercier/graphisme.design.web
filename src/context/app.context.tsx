import { createContext, useContext, type ReactNode } from "react";

export type AppContextType = {
    data: string[]
}

const AppContext = createContext<AppContextType | null>(null)

type AppContextProviderProps = {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
    const data = ["Item 1", "Item 2", "Item 3"];
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
