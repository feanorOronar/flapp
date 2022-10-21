import * as ListItems from './list.js';

const items = document.querySelector('#items');
const addButton = document.querySelector('#add');

addButton.addEventListener('click', () => ListItems.addItem(items));
