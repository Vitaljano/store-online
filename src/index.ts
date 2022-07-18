// import 'bootstrap';
import './scss/style.scss';
import './components/rangeSlider/rangeSlider';
import { Controller } from './components/controller/controller';
// import { SearchBar } from './components/searchBar/saerchBar';
import { Filters } from './components/filters/filters';

const controller = new Controller();
controller.renderCard();
// const search = new SearchBar().init();
const filter = new Filters();
