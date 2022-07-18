import { storage } from '../../helpers/storage';

export class Basket {
    basket: string[];
    constructor() {
        this.basket = storage.get('basket') || [];

        this.basketLength();
        this.initData();
    }
    basketLength() {
        const badge = document.querySelector('.badge') as HTMLElement;
        badge.textContent = this.basket.length.toString();
    }
    addToBasket(id: string, el: HTMLElement) {
        const index = this.basket.indexOf(id);
        const btn = el.querySelector('button') as HTMLElement;
        if (index > -1) {
            this.basket.splice(index, 1);
            this.basketLength();
            el.dispatchEvent(new Event('add'));
        } else {
            if (this.basket.length === 3) {
                this.alertMsg();
                return;
            }
            this.basket.push(id);
            this.basketLength();
            el.dispatchEvent(new Event('add'));
        }
        storage.set('basket', this.basket);
    }
    changeStatus(el: HTMLElement) {
        const btn = el?.querySelector('button');

        if (btn?.textContent?.trim() == 'Добавить в корзину') {
            el.classList.add('in-basket');
            btn.textContent = 'Удалить';
        } else if (btn && btn.textContent?.trim() === 'Удалить') {
            el.classList.remove('in-basket');
            btn.textContent = 'Добавить в корзину';
        }
    }
    initData() {
        console.log(this.basket);
        window.addEventListener('DOMContentLoaded', () => {
            if (this.basket) {
                this.basketLength();
                this.basket.forEach((id) => {
                    const el = document.querySelector(`[data-id="${id}"]`) as HTMLElement;
                    console.log(`[data-id="${id}"]`);

                    this.changeStatus(el);
                });
            }
        });
    }
    alertMsg() {
        alert('Извините, все слоты заполнены');
    }
}

export const basket = new Basket();
