import { NavController, NavParams } from 'ionic-angular';
export declare class SpeakerDetailPage {
    navCtrl: NavController;
    navParams: NavParams;
    speaker: any;
    constructor(navCtrl: NavController, navParams: NavParams);
    goToSessionDetail(session: any): void;
}
