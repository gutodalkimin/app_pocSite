import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
export declare class SignupPage {
    navCtrl: NavController;
    userData: UserData;
    signup: {
        username?: string;
        password?: string;
    };
    submitted: boolean;
    constructor(navCtrl: NavController, userData: UserData);
    onSignup(form: any): void;
}
