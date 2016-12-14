import { NavParams, ViewController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
export declare class ScheduleFilterPage {
    confData: ConferenceData;
    navParams: NavParams;
    viewCtrl: ViewController;
    tracks: Array<{
        name: string;
        isChecked: boolean;
    }>;
    constructor(confData: ConferenceData, navParams: NavParams, viewCtrl: ViewController);
    resetFilters(): void;
    applyFilters(): void;
    dismiss(data?: any): void;
}
