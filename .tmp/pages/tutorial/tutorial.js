import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
export var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
        this.slides = [
            {
                title: ' <b>Seja Bem Vindo</b>',
                description: '.',
                image: 'assets/img/logosite.png',
            },
            {
                title: 'Minicursos',
                description: 'Os minicursos e o workshop serão realizados durante a semana do evento no período da manhão e da tarde.',
                image: 'assets/img/minicurso.png',
            },
            {
                title: 'Palestras',
                description: 'Palestras com grande nomes como Giovani Benedetti, Carlos dos Santos (Microsoft), Sandro Tomasetti, Amanda A. P. Negendank entre outros.',
                image: 'assets/img/palestra.png',
            }
        ];
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.push(TabsPage);
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd;
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    TutorialPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-tutorial',
                    templateUrl: 'tutorial.html'
                },] },
    ];
    /** @nocollapse */
    TutorialPage.ctorParameters = [
        { type: NavController, },
        { type: MenuController, },
    ];
    return TutorialPage;
}());
