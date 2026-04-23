import { type DataGraveyard } from "@/utils";
import data from "@/assets/data.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type AppStore = {
  data: DataGraveyard;
};

const initialData = data as DataGraveyard;

export const useAppStore = create<AppStore>()(
  persist(
    immer(() => ({
      data: initialData,
    })),
    {
      name: "app-store",
    }
  )
);   
