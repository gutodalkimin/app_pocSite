import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
export declare class SpeakerListPage {
    actionSheetCtrl: ActionSheetController;
    navCtrl: NavController;
    confData: ConferenceData;
    config: Config;
    actionSheet: ActionSheet;
    speakers: any[];
    constructor(actionSheetCtrl: ActionSheetController, navCtrl: NavController, confData: ConferenceData, config: Config);
    goToSessionDetail(session: any): void;
    goToSpeakerDetail(speakerName: string): void;
    goToSpeakerTwitter(speaker: any): void;
    openSpeakerShare(speaker: any): void;
    openContact(speaker: any): void;
}
