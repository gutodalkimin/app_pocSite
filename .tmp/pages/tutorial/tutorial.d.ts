import { MenuController, NavController } from 'ionic-angular';
export interface Slide {
    title: string;
    description: string;
    image: string;
}
export declare class TutorialPage {
    navCtrl: NavController;
    menu: MenuController;
    slides: Slide[];
    showSkip: boolean;
    constructor(navCtrl: NavController, menu: MenuController);
    startApp(): void;
    onSlideChangeStart(slider: any): void;
    ionViewDidEnter(): void;
    ionViewWillLeave(): void;
}
