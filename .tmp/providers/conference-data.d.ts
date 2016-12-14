import { Http } from '@angular/http';
import { UserData } from './user-data';
export declare class ConferenceData {
    http: Http;
    user: UserData;
    data: any;
    constructor(http: Http, user: UserData);
    load(): Promise<any>;
    processData(data: any): any;
    processSession(data: any, session: any): void;
    getTimeline(dayIndex: any, queryText?: string, excludeTracks?: any[], segment?: string): Promise<any>;
    filterSession(session: any, queryWords: any, excludeTracks: any, segment: any): void;
    getSpeakers(): Promise<any>;
    getTracks(): Promise<any>;
    getMap(): Promise<any>;
}
