let shop_arr =['../photos/Kentaro Grey 1.JPG','../photos/Kentaro Grey 2.JPG'];

let elShopPhoto = document.getElementById('random-al');


let randomPhoto = (param) =>{
    let randomNumber = Math.floor(Math.random()* param.length);
    let chosen = param[randomNumber];
    return chosen;
};
elShopPhoto.src = randomPhoto(shop_arr);