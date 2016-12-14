import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
export declare class LoginPage {
    navCtrl: NavController;
    userData: UserData;
    login: {
        username?: string;
        password?: string;
    };
    submitted: boolean;
    constructor(navCtrl: NavController, userData: UserData);
    onLogin(form: any): void;
    onSignup(): void;
}
