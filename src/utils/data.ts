
export type DeletedSite = {
    id: number;
    tag: string[];
    siteName: string;
    description: string;
    contenue: string;
}

export type DataGraveyard = {
    tags: string[];
    data: DeletedSite[]
}
