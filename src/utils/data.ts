import data from "@/assets/data.json";

export type DeletedSiteType = "Service" | "App" | "Hardware" | "Other";
export type DeletedSite = {
    id: number;
    type: DeletedSiteType;
    siteName: string;
    description: string;
    url: string;
}

export type DataGraveyard = DeletedSite[];

export const getGraveyardData = (): DataGraveyard => {
    const localData = localStorage.getItem("graveyardData");

    if (!localData) {
        localStorage.setItem("graveyardData", JSON.stringify(data));
    }

    return JSON.parse(localStorage.getItem("graveyardData") || "[]");
}
