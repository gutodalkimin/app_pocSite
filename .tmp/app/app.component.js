import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
export var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Calendario', component: TabsPage, icon: 'calendar' },
            { title: 'Palestrantes', component: TabsPage, index: 1, icon: 'contacts' },
            { title: 'Mapa', component: TabsPage, index: 2, icon: 'map' },
            { title: 'Sobre IX Site', component: TabsPage, index: 3, icon: 'information-circle' },
        ];
        this.loggedInPages = [
            { title: 'Account', component: AccountPage, icon: 'person' },
            { title: 'Logout', component: TabsPage, icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', component: LoginPage, icon: 'log-in' },
            { title: 'Signup', component: SignupPage, icon: 'person-add' }
        ];
        this.rootPage = TutorialPage;
        // Call any initial plugins when ready
        platform.ready().then(function () {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var _this = this;
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            this.nav.setRoot(page.component);
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            setTimeout(function () {
                _this.userData.logout();
            }, 1000);
        }
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.template.html'
                },] },
    ];
    /** @nocollapse */
    ConferenceApp.ctorParameters = [
        { type: Events, },
        { type: UserData, },
        { type: MenuController, },
        { type: Platform, },
        { type: ConferenceData, },
    ];
    ConferenceApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return ConferenceApp;
}());
