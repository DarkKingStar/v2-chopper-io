import { MenuType } from './menuType';
import {genres} from './genres';
export const menu : MenuType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    multiple: true,
    path: "/categories",
    submenu: [
      { name: "Recent Releases", path: "/recent-releases" },
      { name: "Top Rated", path: "/top-rated" },
      { name: "New Season", path: "/new-season" },
      { name: "Most Popular", path: "/most-popular" },
    ]
  },
  {
    name: "MyList",
    path: "/my-anime-list",
  },
  {
    name: "Genres",
    multiple: true,
    path: '/genres',
    submenu: genres,
  },
  {
    name: "Friends",
    path: "/friends",
  },
];


