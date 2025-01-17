export enum SupportGame {
    'Valorant' = 'Valorant',
    'League of Legends' = 'League of Legends',
    'PUBG Default' = 'PUBG Default',
    'PUBG Custom' = 'PUBG Custom',
}

export interface SupportGameList {
    name: string;
    value: SupportGame;
}

export interface SupportMapList {
    name: string;
    value: string;
    game: SupportGame;
}

export interface Tier {
    label: string;
    value: string;
    weight: number;
    emoji: string;
}

export enum SupportGameTier {
    'Valorant' = 'Valorant',
    'League of Legends' = 'League of Legends',
}

export type TierList = {
    [key in SupportGameTier]: Tier[];
};