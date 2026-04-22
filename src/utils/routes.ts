
export const routes =["/", "/about", "/graveyard", "/graveyard/:id"] as const;

export type AppRoute = typeof routes[number];
