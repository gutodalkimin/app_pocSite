import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
export var SignupPage = (function () {
    function SignupPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.signup = {};
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(TabsPage);
        }
    };
    SignupPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'signup.html'
                },] },
    ];
    /** @nocollapse */
    SignupPage.ctorParameters = [
        { type: NavController, },
        { type: UserData, },
    ];
    return SignupPage;
}());
