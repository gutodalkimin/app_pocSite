import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
export interface PageInterface {
    title: string;
    component: any;
    icon: string;
    logsOut?: boolean;
    index?: number;
}
export declare class ConferenceApp {
    events: Events;
    userData: UserData;
    menu: MenuController;
    nav: Nav;
    appPages: PageInterface[];
    loggedInPages: PageInterface[];
    loggedOutPages: PageInterface[];
    rootPage: any;
    constructor(events: Events, userData: UserData, menu: MenuController, platform: Platform, confData: ConferenceData);
    openPage(page: PageInterface): void;
    listenToLoginEvents(): void;
    enableMenu(loggedIn: any): void;
}
