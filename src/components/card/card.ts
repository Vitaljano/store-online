import { basket } from '../basket/basket';
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

export class Card {
    buffer: HTMLElement[];
    flow: HTMLElement;
    template: HTMLTemplateElement;

    constructor() {
        this.flow = document.getElementById('card-list') as HTMLElement;
        this.template = document.getElementById('temp') as HTMLTemplateElement;
        this.buffer = [];
    }
    generateCard(product: Product) {
        // this.cardTemplate = temp?.content.querySelector('.card-item');
        const cardClone = this.template?.content.querySelector('.card-item')?.cloneNode(true) as HTMLElement;
        const title = cardClone?.querySelector('.card-title') as HTMLElement;
        const image = cardClone?.querySelector('.card-image img') as HTMLImageElement;
        const amount = cardClone?.querySelector('.card-amount') as HTMLElement;
        const year = cardClone?.querySelector('.card-date') as HTMLElement;
        const manufacture = cardClone?.querySelector('.card-company') as HTMLElement;
        const color = cardClone?.querySelector('.card-color') as HTMLElement;
        const price = cardClone?.querySelector('.card-price') as HTMLElement;
        const addBtn = cardClone?.querySelector('.card-add-btn') as HTMLElement;

        cardClone.dataset.id = product.id.toString();
        cardClone.dataset.basket = 'false';
        cardClone.dataset.created = product.year.toString();
        cardClone.dataset.title = product.name.toString();
        cardClone.dataset.price = product.price.toString();
        cardClone.dataset.groups = `["${product.manufacture}","${product.color}","${product.category}"]`;
        title.textContent = product.name;
        image.src = 'assets/images/' + product.image;
        amount.textContent = product.amount.toString();
        year.textContent = product.year.toString();
        manufacture.textContent = product.manufacture;
        color.textContent = product.color;
        price.textContent = product.price.toString();

        cardClone.addEventListener('click', (e) => {
            const currentElement = e.currentTarget as HTMLElement;
            const isButton = e.target as HTMLElement;

            if (isButton.tagName === 'BUTTON') {
                const id = currentElement?.dataset.id as string;
                basket.addToBasket(id, currentElement);
            }
        });
        cardClone.addEventListener('add', (e) => {
            basket.changeStatus(e.currentTarget as HTMLElement);
        });
        this.buffer.push(cardClone);
    }

    render() {
        this.buffer.forEach((el) => {
            this.flow.append(el);
        });
        this.buffer = [];
    }
    clearFlow() {
        const items = this.flow.querySelectorAll('.card-item');

        items.forEach((el) => {
            el.remove();
        });
    }
}
