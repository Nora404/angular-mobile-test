export class Equipment{
    shortcut: string = "00";
    name: string = "Name";
    image: string = "../../assets/bild.png";

    settings: string = "1 / A";

    weight: number = 100;
    weightRange: Map<string, number> = new Map<string, number>([
        ["start", 20],
        ["end", 200],
        ["steps", 2],
    ]);
}   

