export interface MenuItem {
  name: string;
  price: number;
  description: string;
  tags?: string[];
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export type MenuData = MenuCategory[];