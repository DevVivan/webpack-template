import './assets/styles/style.css'
import LogoImage from './assets/img/thisisanimage.png';

const element = document.createElement('div');
element.innerHTML = 'Hello!';
element.classList.add('hello');
document.body.appendChild(element);

const Image = new Image();
Image.src = LogoImage;

document.body.appendChild(Image);