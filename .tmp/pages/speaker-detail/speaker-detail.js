import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionDetailPage } from '../session-detail/session-detail';
export var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.speaker = this.navParams.data;
    }
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(SessionDetailPage, session);
    };
    SpeakerDetailPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-speaker-detail',
                    templateUrl: 'speaker-detail.html'
                },] },
    ];
    /** @nocollapse */
    SpeakerDetailPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return SpeakerDetailPage;
}());
