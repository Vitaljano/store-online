export type Product = {
    id: number;
    name: string;
    amount: number;
    category: string;
    year: number;
    manufacture: string;
    color: string;
    price: number;
    image: string;
};

export const products = [
    {
        id: 1,
        name: 'Iphone 12 64gb',
        amount: 12,
        year: 2011,
        category: 'phone',
        manufacture: 'Apple',
        color: 'белый',
        price: 800,
        image: 'apple-iphone-12-64gb-baltas-white.jpeg',
    },
    {
        id: 2,
        name: 'Iphone 12 64gb',
        amount: 12,
        year: 2012,
        category: 'phone',
        manufacture: 'Apple',
        color: 'черный',
        price: 800,
        image: 'apple-iphone-12-64gb-juodas-black.jpeg',
    },
    {
        id: 3,
        name: 'Iphone 12 64gb',
        amount: 12,
        year: 2015,
        category: 'phone',
        manufacture: 'Apple',
        color: 'синий',
        price: 800,
        image: 'apple-iphone-12-64gb-melynas-blue.jpeg',
    },
    {
        id: 5,
        name: 'Iphone 12 64gb',
        amount: 12,
        year: 2012,
        category: 'phone',
        manufacture: 'Apple',
        color: 'красный',
        price: 300,
        image: 'apple-iphone-12-64gb-raudonas-product.jpeg',
    },
    {
        id: 6,
        name: 'Samsung galaxy a13 64gb',
        amount: 12,
        year: 2002,
        category: 'phone',
        manufacture: 'Samsung',
        color: 'черный',
        price: 800,
        image: 'samsung-galaxy-a13-64gb-juodas.png',
    },
    {
        id: 7,
        name: 'Samsung galaxy s22 128gb',
        amount: 12,
        year: 2012,
        category: 'phone',
        manufacture: 'Samsung',
        color: 'черный',
        price: 800,
        image: 'samsung-galaxy-s22-128gb-juodas.png',
    },
    {
        id: 8,
        name: 'Samsung galaxy s22 sm 128gb',
        amount: 12,
        year: 2022,
        category: 'phone',
        manufacture: 'Samsung',
        color: 'белый',
        price: 800,
        image: 'samsung-galaxy-s22-sm-s906b-168-cm-66_iYZo9VR.jpeg',
    },
    {
        id: 9,
        name: 'Xiaomi Note',
        amount: 12,
        year: 2012,
        category: 'phone',
        manufacture: 'Xiaomi',
        color: 'черный',
        price: 1800,
        image: 'xiaomi-note-10-5g-165-cm-65-dual-sim.jpeg',
    },
    {
        id: 10,
        name: 'Xiaomi Note 11',
        amount: 12,
        year: 2017,
        category: 'phone',
        manufacture: 'Xiaomi',
        color: 'синий',
        price: 1800,
        image: 'xiaomi-redmi-note-11-4gb-ram-128gb-rom.jpg',
    },
];
