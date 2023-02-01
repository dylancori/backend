// const quantity = 10000;

// const obj = {};

// for (let i = 1; i <= 20; i++) {
//   obj[i] = 0;
// }

// const getRandomNumber = (min, max) => {
//   const minFormat = Math.ceil(min);
//   const maxFormat = Math.ceil(max);
//   return Math.floor(Math.random() * (maxFormat - minFormat) + minFormat);
// };

// for (let i = 0; i < quantity; i++) {
//   const randomNumber = getRandomNumber(1, 20);
//   obj[randomNumber]++;
// }

// console.log(obj);
import fs from 'fs';

export default class UseManager{
    getUsuarios = async()=>{
        if (fs.existsSync) {
            
        }
    }
}