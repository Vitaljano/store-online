// import 'bootstrap';
import './scss/style.scss';

import { RangeSlider } from './components/rangeSlider/rangeSlider';

const sliderDateElement = document.getElementById('slider-date');
const sliderPriceElement = document.getElementById('slider-price');
const snapDate = [
    document.getElementById('slider-date-snap-value-lower'),
    document.getElementById('slider-date-snap-value-upper'),
];
const snapPrice = [
    document.getElementById('slider-price-snap-value-lower'),
    document.getElementById('slider-price-snap-value-upper'),
];

if (sliderDateElement && snapDate) {
    const sliderDate = new RangeSlider(sliderDateElement, snapDate as HTMLElement[], {
        start: 1995,
        end: 2015,
        min: 1990,
        max: 2022,
    });
}

if (sliderPriceElement && snapPrice) {
    const sliderPrice = new RangeSlider(sliderPriceElement, snapPrice as HTMLElement[], {
        start: 1000,
        end: 4000,
        min: 10,
        max: 5000,
    });
}
console.log(snapDate);
