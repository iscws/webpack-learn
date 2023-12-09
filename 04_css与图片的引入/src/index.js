import './css/css.less'
import sum from './components/cpns';
import zznhImage from "./img/nhlt.jpg"
import nvImage from "./img/zznh.png"

const app=document.querySelector('#app');
app.innerHTML=`哈哈+${sum(12,34)}`
const img = document.createElement('img');
img.src=zznhImage;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.src=nvImage;
document.body.appendChild(img2);

