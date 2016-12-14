import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
export var SessionDetailPage = (function () {
    function SessionDetailPage(navParams) {
        this.navParams = navParams;
        this.session = navParams.data;
    }
    SessionDetailPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-session-detail',
                    templateUrl: 'session-detail.html'
                },] },
    ];
    /** @nocollapse */
    SessionDetailPage.ctorParameters = [
        { type: NavParams, },
    ];
    return SessionDetailPage;
}());
