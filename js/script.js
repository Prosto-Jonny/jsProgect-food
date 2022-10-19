require('es6-promise').polyfill();


import tabs  from './modules/tabs';
import modal  from './modules/modal';
import calc  from './modules/calc';
import cards  from './modules/cards';
import forms  from './modules/forms';
import slider  from './modules/slider';
import timer  from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

        tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        modal('[data-modal]', '.modal', modalTimerId);
        calc();
        cards();
        forms('form', modalTimerId);
        slider({
            container: '.offer__slider',
            slide: '.offer__slide',
            nextArr: '.offer__slider-next',
            prevArr: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
        });
        timer('.timer', '2022-12-31');
});