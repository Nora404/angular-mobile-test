export interface Config {
    name: string;
    break: number;
    training: string;
}

export class DefaultConfig implements Config{
    name: string = "Hallo Welt";
    break: number = 30;
    training: string = "Training";
}