export interface IMenuItem {
  id: string;
  value: string;
}

export interface IMenus {
  menus: IMenuItem[][];
  rules: IMenuRules;
}

export interface IMenuRules {
  [key: number]: number[];
}
