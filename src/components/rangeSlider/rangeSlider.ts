import * as noUiSlider from 'nouislider';
// const slider = document.getElementById('slider') as noUiSlider.target;

// noUiSlider.create(slider, {
//     start: [1995, 2010],
//     connect: true,
//     range: {
//         min: 1990,
//         max: 2022,
//     },
// });

// const snapValues = [
//     document.getElementById('slider-snap-value-lower'),
//     document.getElementById('slider-snap-value-upper'),
// ];

// if (slider) {
//     slider.noUiSlider?.on('update', function (values, handle) {
//         if (snapValues[handle] != null) {
//             const value = values[handle] as string;

//             snapValues[handle]!.innerHTML = parseInt(value).toString();
//         }
//     });
// }

// console.log(noUiSlider);

type range = {
    start: number;
    end: number;
    min: number;
    max: number;
};

export class RangeSlider {
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
