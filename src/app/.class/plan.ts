import { Training } from '../.class/training'

export interface Plan {
    name : string,
    frequency: string,
    speed: string,
    plan: Array<Training>
}