import {Section} from "./Section";
import {TimeUnit} from "../../infra/utils/TimeUnit";

export interface ReadingSpeed {
    section: Section;
    timeUnit: TimeUnit
}