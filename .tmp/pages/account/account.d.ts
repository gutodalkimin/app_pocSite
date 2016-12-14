import { AlertController, NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
export declare class AccountPage {
    alertCtrl: AlertController;
    nav: NavController;
    userData: UserData;
    username: string;
    constructor(alertCtrl: AlertController, nav: NavController, userData: UserData);
    ngAfterViewInit(): void;
    updatePicture(): void;
    changeUsername(): void;
    getUsername(): void;
    changePassword(): void;
    logout(): void;
}
