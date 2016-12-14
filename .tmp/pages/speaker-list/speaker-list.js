import { Component } from '@angular/core';
import { ActionSheetController, Config, NavController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
export var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.speakers = [];
        confData.getSpeakers().then(function (speakers) {
            _this.speakers = speakers;
        });
    }
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(SessionDetailPage, session);
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speakerName) {
        this.navCtrl.push(SpeakerDetailPage, speakerName);
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        // TODO FIX
        // let app = new InAppBrowser(`https://twitter.com/${speaker.twitter}`, '_blank');
        // app.on('loadstop').subscribe(
        //   (ev) => {
        //     console.log('InAppBrowser loaded!');
        //   });
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...',
                    handler: function () {
                        console.log('Share via clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact with ' + speaker.name,
            buttons: [
                {
                    text: "Email ( " + speaker.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + speaker.email);
                    }
                },
                {
                    text: "Call ( " + speaker.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + speaker.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-speaker-list',
                    templateUrl: 'speaker-list.html'
                },] },
    ];
    /** @nocollapse */
    SpeakerListPage.ctorParameters = [
        { type: ActionSheetController, },
        { type: NavController, },
        { type: ConferenceData, },
        { type: Config, },
    ];
    return SpeakerListPage;
}());
