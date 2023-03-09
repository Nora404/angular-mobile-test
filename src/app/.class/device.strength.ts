export interface DeviceStrength {
    shortcut: string;
    name: string;
    image: string;
    weightRange: {
        start: number,
        end: number,
        steps: number
    }
}