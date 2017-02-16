import { randomText } from './random';
import './main.css';

const content = document.querySelector('#content');
content.textContent = 'Loading...'

randomText()
  .then(text => {
    content.textContent = text;
  });
