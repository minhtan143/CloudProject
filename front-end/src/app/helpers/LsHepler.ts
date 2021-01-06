import { Menu } from '../commons/consts/menu.const';
export class LsHelper {
    static menuKey = "menu";

    static setMenu(menu: string): void {
        localStorage.setItem(this.menuKey, menu);
    }

    static getMenu(): string {
        let menu = localStorage.getItem(this.menuKey);
        if(!menu){
            menu = Menu.Integer;
        }
        return menu;
    }
}