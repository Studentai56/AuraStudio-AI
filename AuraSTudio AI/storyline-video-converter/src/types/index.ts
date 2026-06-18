export type Frame = {
    id: string;
    imageUrl: string;
    description: string;
};

export type Style = {
    id: string;
    name: string;
    description: string;
};

export type Storyline = {
    title: string;
    frames: Frame[];
    selectedStyle: Style;
};