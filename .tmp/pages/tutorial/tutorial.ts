import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
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

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
