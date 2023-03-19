export interface PlanData{
    name: string;
    times: Array<Date>;
    data: Array<Object>;
}

export class DefaultPlanData {
    name: string = "name";
    times: Array<Date> = [new Date()];
    data: Array<Object> = [{A1: "100", ST:"0.51"}];
}