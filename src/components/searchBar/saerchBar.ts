import { products } from '../../data/products';
import { Card } from '../card/card';

export class SearchBar {
    searchBar;
    card;
    constructor() {
        this.card = new Card();
        this.searchBar = document.getElementById('search-bar') as HTMLInputElement;
    }
    init() {
        this.searchBar.addEventListener('input', () => {
            const searchWord = this.searchBar.value.toLowerCase();

            const filteredProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(searchWord);
            });
            console.log(filteredProducts);

            if (filteredProducts) {
                this.card.clearFlow();
                filteredProducts.forEach((product) => {
                    this.card.generateCard(product);
                });
                this.card.render();
            }
        });
    }
}
