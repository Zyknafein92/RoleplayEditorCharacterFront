import {Modifer} from "./modifer.model";

export class Anomaly {
 id: number;
 name: string;
 description: string;
 modifierList: Array<Modifer>;
}
