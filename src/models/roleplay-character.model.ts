import {Age} from './age.model';
import {Rank} from './rank.model';
import {Job} from './job.model';
import {Experience} from './experience.model';
import {StatsPoint} from './stats-point.model';
import {Asset} from './asset.model';
import {Anomaly} from './anomaly.model';
import {Skill} from './skill.model';
import {Language} from './language.model';
import {Knowledge} from './knowledge.model';
import {Modifer} from './modifer.model';

export class RoleplayCharacter {
 id: number;
 fullName: string;
 nickName: string;
 age: Age;
 rank: Rank;
 job: Job;
 experience: Experience;
 statsPoint: Array<StatsPoint>;
 assetList: Array<Asset>;
 anomalyList: Array<Anomaly>;
 skillList: Array<Skill>;
 languageList: Array<Language>;
 knowledgeList: Array<Knowledge>;
 modifierList: Array<Modifer>;
}
