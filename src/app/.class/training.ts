export interface Training {
    sequence: number;
    training: string;
    shortcut: string;
    name: string;
    image: string;
    value: number;
    settings: string;
    note: string;
}

export class DefaultTraining implements Training{
    sequence: number = 0;
    training: string = "";
    shortcut: string = "";
    name: string = "";
    image: string = "";
    value: number = 0;
    settings: string = "";
    note: string = "";
}