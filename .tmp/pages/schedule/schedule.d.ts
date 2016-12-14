import { AlertController, App, ItemSliding, List, ModalController, NavController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
export declare class SchedulePage {
    alertCtrl: AlertController;
    app: App;
    modalCtrl: ModalController;
    navCtrl: NavController;
    confData: ConferenceData;
    user: UserData;
    scheduleList: List;
    dayIndex: number;
    queryText: string;
    segment: string;
    excludeTracks: any[];
    shownSessions: any;
    groups: any[];
    confDate: string;
    constructor(alertCtrl: AlertController, app: App, modalCtrl: ModalController, navCtrl: NavController, confData: ConferenceData, user: UserData);
    ionViewDidEnter(): void;
    ngAfterViewInit(): void;
    updateSchedule(): void;
    presentFilter(): void;
    goToSessionDetail(sessionData: any): void;
    addFavorite(slidingItem: ItemSliding, sessionData: any): void;
    removeFavorite(slidingItem: ItemSliding, sessionData: any, title: any): void;
}
