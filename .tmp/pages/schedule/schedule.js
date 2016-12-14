import { Component, ViewChild } from '@angular/core';
import { AlertController, App, List, ModalController, NavController } from 'ionic-angular';
import moment from 'moment';
import { ConferenceData } from '../../providers/conference-data';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SessionDetailPage } from '../session-detail/session-detail';
import { UserData } from '../../providers/user-data';
export var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, modalCtrl, navCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidEnter = function () {
        this.app.setTitle('Schedule');
    };
    SchedulePage.prototype.ngAfterViewInit = function () {
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).then(function (data) {
            var timestamp = data.date;
            /*
              To learn how to use third party libs in an
              Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
            */
            _this.confDate = moment(timestamp).format('MM/DD/YYYY');
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(SessionDetailPage, sessionData);
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-schedule',
                    templateUrl: 'schedule.html'
                },] },
    ];
    /** @nocollapse */
    SchedulePage.ctorParameters = [
        { type: AlertController, },
        { type: App, },
        { type: ModalController, },
        { type: NavController, },
        { type: ConferenceData, },
        { type: UserData, },
    ];
    SchedulePage.propDecorators = {
        'scheduleList': [{ type: ViewChild, args: ['scheduleList', { read: List },] },],
    };
    return SchedulePage;
}());
