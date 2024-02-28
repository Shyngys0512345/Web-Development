export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 621756,
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hdf/hc7/83559837007902.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000",
    link: "https://t.me/c/1893348409/2"
  },
  {
    id: 2,
    name: 'Samsung Galaxy Z Fold5',
    price: 623533,
    description: 'Смартфон Samsung Galaxy Z Fold5 5G 12 ГБ/512 ГБ черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h36/h1f/82762046963742.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/samsung-galaxy-z-fold5-5g-12-gb-512-gb-chernyi-112480820/?c=750000000",
    link: "https://t.me/c/1893348409/3"
  },
  {
    id: 3,
    name: 'Смарт-часы Apple Watch SE',
    price: 131433,
    description: 'Смарт-часы Apple Watch SE 40 мм черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000",
    link: "https://t.me/c/1893348409/4"
  },
  {
    id: 4,
    name: 'Ноутбук Apple MacBook Air 13',
    price: 409499,
    description: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000",
    link: "https://t.me/c/1893348409/5"
  },
  {
    id: 5,
    name: 'Ноутбук ASUS ROG Zephyrus M16',
    price: 1737190,
    description: 'Ноутбук ASUS ROG Zephyrus M16 GU603ZX-K8051X 90NR08R1-M002U0 черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h30/h6f/64439900700702.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/asus-rog-zephyrus-m16-gu603zx-k8051x-90nr08r1-m002u0-chernyi-105919555/?c=750000000",
    link: "https://t.me/c/1893348409/6"
  },
  {
    id: 6,
    name: 'Телевизор Samsung UE43T5300AUXCE',
    price: 142997,
    description: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000",
    link: "https://t.me/c/1893348409/7"
  },
  {
    id: 7,
    name: 'Телевизор LG 75QNED876QB',
    price: 999990,
    description: 'Телевизор LG 75QNED876QB 191 см черный',
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hee/h9b/64516054351902.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/lg-75qned876qb-191-sm-chernyi-106028060/?c=750000000",
    link: "https://t.me/c/1893348409/8"
  },
  {
    id: 8,
    name: 'Монитор Apple Studio Display Nano-texture glass',
    price: 1194900,
    description: 'Монитор Apple Studio Display Nano-texture glass MMYW3 серебристый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h01/h31/64152013537310.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/apple-studio-display-nano-texture-glass-mmyw3-serebristyi-107196103/?c=750000000",
    link: "https://t.me/c/1893348409/9"  

  },
  {
    id: 9,
    name: 'Робот-пылесос Ritmix',
    price: 25680,
    description: 'Робот-пылесос Ritmix VC-010 черный',
    rating: 4,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hca/hdd/64066809626654.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/ritmix-vc-010-chernyi-101672331/?c=750000000",
    link: "https://t.me/c/1893348409/10"
  },
  {
    id: 10,
    name: 'Робот-пылесос Dreame',
    price: 311206,
    description: 'Робот-пылесос Dreame L10 Ultra белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/hc2/79847748304926.jpg?format=gallery-large",
    addressUrl: "https://kaspi.kz/shop/p/dreame-l10-ultra-belyi-109775651/?c=750000000",
    link: "https://t.me/c/1893348409/11"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/