import { Training } from '../.class/training'

export interface Plan {
    name : string,
    frequency: string,
    speed: string,
    note: string,
    plan: Array<Training>
}

export class DefaultPlan implements Plan {
    name : string = "Training";
    frequency: string = "0";
    speed: string = "0";
    note: string = ""
    plan: Array<Training> = []
}