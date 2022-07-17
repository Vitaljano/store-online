import { products } from '../../data/products';
import { Card, Product } from '../card/card';

export class Controller {
    card;
    constructor() {
        this.card = new Card();
    }

    renderCard() {
        products.forEach((product: Product) => {
            this.card.generateCard(product);
        });
        this.card.render();
    }
}
