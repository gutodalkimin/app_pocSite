import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
export declare class UserData {
    events: Events;
    storage: Storage;
    _favorites: any[];
    HAS_LOGGED_IN: string;
    constructor(events: Events, storage: Storage);
    hasFavorite(sessionName: any): boolean;
    addFavorite(sessionName: any): void;
    removeFavorite(sessionName: any): void;
    login(username: any): void;
    signup(username: any): void;
    logout(): void;
    setUsername(username: any): void;
    getUsername(): Promise<any>;
    hasLoggedIn(): Promise<boolean>;
}
