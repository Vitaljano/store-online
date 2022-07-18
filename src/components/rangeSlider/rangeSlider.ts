import * as noUiSlider from 'nouislider';

type range = {
    start: number;
    end: number;
    min: number;
    max: number;
};
class RangeSlider {
    slider: noUiSlider.target;
    snapValues: HTMLElement[];

    constructor(sliderTarget: HTMLElement, snapValues: HTMLElement[], opt: range) {
        this.slider = sliderTarget as noUiSlider.target;
        this.snapValues = snapValues;

        noUiSlider.create(this.slider, {
            start: [opt.start, opt.end],
            connect: true,
            range: {
                max: opt.max,
                min: opt.min,
            },
        });

        if (this.slider) {
            this.slider.noUiSlider?.on('update', function (values, handle) {
                if (snapValues[handle] != undefined) {
                    const value = values[handle] as string;

                    snapValues[handle]!.innerHTML = parseInt(value).toString();
                }
            });
        }
    }
}

const sliderDateElement = document.getElementById('slider-date') as HTMLElement;
const sliderPriceElement = document.getElementById('slider-price') as HTMLElement;
const snapDate = [
    document.getElementById('slider-date-snap-value-lower'),
    document.getElementById('slider-date-snap-value-upper'),
];
const snapPrice = [
    document.getElementById('slider-price-snap-value-lower'),
    document.getElementById('slider-price-snap-value-upper'),
];

export const sliderDate = new RangeSlider(sliderDateElement, snapDate as HTMLElement[], {
    start: 1995,
    end: 2015,
    min: 1990,
    max: 2022,
});

export const sliderPrice = new RangeSlider(sliderPriceElement, snapPrice as HTMLElement[], {
    start: 1000,
    end: 4000,
    min: 10,
    max: 5000,
});
