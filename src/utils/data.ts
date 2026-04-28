
/**
 * TODO:
 *  - Update the type
 * ``json
 * {
 *  "tags": [string]
 *  "data": [DeletedSite]
 * }
 * ```
 * - DeletedSite:
 *  - id: number
 *  - tags: [string]
 */
export type DeletedSiteType = "Service" | "App" | "Hardware" | "Other";
export type DeletedSite = {
    id: number;
    type: DeletedSiteType;
    siteName: string;
    description: string;
    contenue: string;
}

export type DataGraveyard = DeletedSite[]

