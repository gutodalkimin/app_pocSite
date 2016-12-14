import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
export var PopoverPage = (function () {
    function PopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'about-popover.html'
                },] },
    ];
    /** @nocollapse */
    PopoverPage.ctorParameters = [
        { type: ViewController, },
    ];
    return PopoverPage;
}());
