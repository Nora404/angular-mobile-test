export interface DeviceStrength {
    shortcut: string;
    name: string;
    image: string;
    trained: string;
    weightRange: {
        start: number,
        end: number,
        steps: number
    }
}