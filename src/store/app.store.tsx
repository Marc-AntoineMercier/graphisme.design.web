import { getGraveyardData, type DataGraveyard } from "@/utils";
import { create } from "zustand";

export type AppStore = {
  data: DataGraveyard;
}

export const useAppStore = create<AppStore>(() => ({
  data: getGraveyardData()
}))
