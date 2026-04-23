export type DeletedSiteType = "Service" | "App" | "Hardware" | "Other";
export type DeletedSite = {
    id: number;
    type: DeletedSiteType;
    siteName: string;
    description: string;
    url: string;
}

export type DataGraveyard = DeletedSite[];