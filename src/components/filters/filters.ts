import { sliderDate, sliderPrice } from '../rangeSlider/rangeSlider';
import Shuffle from 'shufflejs';
import { storage } from '../../helpers/storage';
import { basket } from '../basket/basket';

export class Filters {
    flow;
    shuffle;
    companyFlags: string[];
    searchBar: HTMLInputElement;
    manufactureFilters: HTMLElement;
    sortSelectElement: HTMLSelectElement;
    categorySelectElement: HTMLSelectElement;
    constructor() {
        this.flow = document.getElementById('card-list') as HTMLElement;
        this.companyFlags = [];
        this.searchBar = document.getElementById('search-bar') as HTMLInputElement;
        this.manufactureFilters = document.querySelector('.manufacturer') as HTMLElement;
        this.sortSelectElement = document.querySelector('.sort-select') as HTMLSelectElement;
        this.categorySelectElement = document.querySelector('.category-select') as HTMLSelectElement;
        this.shuffle = new Shuffle(this.flow, {
            itemSelector: '.card-item',
            filterMode: Shuffle.FilterMode.ALL,
        });
        window.addEventListener('DOMContentLoaded', () => this.searchBar.focus());
        this.search();
        this.filterByManufacture();
        this.filterByCategory();
        this.filterByColor();
        this.sorting();
        this.resetFilters();
        this.rangeFilterByYear();
        this.rangeFilterByPrice();
        this.resetSettings();
    }
    search() {
        this.searchBar.addEventListener('keyup', (e) => {
            const searchWord = this.searchBar.value.toLowerCase();
            this.shuffle.filter((element) => {
                const title = element.querySelector('.card-title');
                const titleText = title?.textContent?.toLowerCase();

                return titleText?.includes(searchWord) || false;
            });
        });
    }
    filterByManufacture() {
        const inputs = this.manufactureFilters.querySelectorAll('input');

        inputs.forEach((input) => {
            input.addEventListener('change', (e) => {
                const inputValue = e.target as HTMLInputElement;

                if (inputValue.checked) {
                    this.companyFlags.push(inputValue.value);
                } else {
                    const index = this.companyFlags.indexOf(inputValue.value);
                    this.companyFlags.splice(index, 1);
                }

                this.shuffle?.filter(this.companyFlags);
            });
        });
    }

    filterByColor() {
        const filterField = document.querySelector('.color') as HTMLElement;
        const buttons = filterField.querySelectorAll('button');
        let flag = false;

        buttons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const button = e.target as HTMLElement;
                const buttonValue = button.textContent?.toLowerCase();

                if (!flag) {
                    flag = true;
                } else {
                    flag = false;
                }

                if (buttonValue && flag) {
                    this.companyFlags.push(buttonValue);
                } else {
                    const index = this.companyFlags.indexOf(buttonValue as string);
                    this.companyFlags.splice(index, 1);
                }

                this.shuffle?.filter(this.companyFlags);
            });
        });
    }
    filterByCategory() {
        this.categorySelectElement.addEventListener('change', (e) => {
            const el = e.target as HTMLSelectElement;
            const elValue = (el[el.selectedIndex] as HTMLOptionElement).value;

            this.shuffle.filter(elValue);
            if (elValue === 'all') {
                this.shuffle.filter();
            }
        });
    }
    rangeFilterByYear() {
        sliderDate.slider.noUiSlider?.on('change', ([min, max]) => {
            this.shuffle.filter((element) => {
                const year = element.dataset.created;
                if (year) {
                    return year >= min && year <= max;
                }
                return false;
            });
        });
    }
    rangeFilterByPrice() {
        sliderPrice.slider.noUiSlider?.on('change', ([min, max]) => {
            this.shuffle.filter((element) => {
                const price = element.dataset.created;
                if (price) {
                    return price >= min && price <= max;
                }
                return false;
            });
        });
    }
    _sortByDate(element: HTMLElement) {
        return element.dataset.created;
    }
    _sortByTitle(element: HTMLElement) {
        return element.dataset.title;
    }
    _sortByPrice(element: HTMLElement) {
        return element.dataset.title;
    }

    sorting() {
        this.sortSelectElement.addEventListener('change', () => {
            const sortType = this.sortSelectElement.value;

            switch (sortType) {
                case 'titleUp':
                    this.shuffle.sort({
                        reverse: true,
                        by: this._sortByTitle,
                    });
                    break;
                case 'titleDown':
                    console.log('down');

                    this.shuffle.sort({
                        reverse: false,
                        by: this._sortByTitle,
                    });
                    break;
                case 'yearUp':
                    this.shuffle.sort({
                        reverse: false,
                        by: this._sortByDate,
                    });
                    break;
                case 'yearDown':
                    this.shuffle.sort({
                        reverse: true,
                        by: this._sortByDate,
                    });
                    break;
                case 'priceUp':
                    this.shuffle.sort({
                        reverse: false,
                        by: this._sortByPrice,
                    });
                    break;
                case 'priceDown':
                    this.shuffle.sort({
                        reverse: true,
                        by: this._sortByPrice,
                    });
                    break;
                default:
                    this.shuffle.sort({
                        randomize: true,
                    });
            }
        });
    }

    resetFilters() {
        const btnReset = document.querySelector('#reset-filters');
        btnReset?.addEventListener('click', () => {
            // rest checkbox
            const checkbox = this.manufactureFilters.querySelectorAll('input');

            checkbox.forEach((el) => {
                el.checked = false;
            });
            // reset sort select
            this.categorySelectElement.options.selectedIndex = 0;
            this.sortSelectElement.options.selectedIndex = 0;

            sliderDate.slider.noUiSlider?.set([1995, 2015]);
            sliderPrice.slider.noUiSlider?.set([1000, 4000]);
        });
    }
    resetSettings() {
        const restButton = document.querySelector('.reset-settings') as HTMLElement;
        restButton.addEventListener('click', () => {
            storage.clear();
            this.resetFilters();
        });
    }
}
