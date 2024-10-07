export interface MenuType{
    name: String;
    multiple?: boolean;
    path: MenuType[] | String;
    submenu?: MenuType[]
};