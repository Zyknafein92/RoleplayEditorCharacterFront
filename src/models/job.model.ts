import {Modifer} from "./modifer.model";

export class Job {
 id: number;
 name: string;
 isValid: boolean;
 modifierList: Array<Modifer>;
}
