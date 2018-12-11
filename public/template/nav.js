let binary = function(){
    let numStr = '';
    for (let i = 0; i < 8; i++){
        numStr += Math.floor(Math.random() * 2);
    }
    return numStr;
};

let home = binary();
let collection = binary();
let about = binary();
let contact = binary();
let projects = binary();

let nav = $('#nav-template').html("<p id='nav-main'></p>")
$('#nav-main').append(`<a class='link' href = '../pages/home.html'><p class='shop'>${home}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/about.html'><p class='shop'>${about}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/shop.html'><p class='shop'>${collection}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/projects.html'><p class='shop'>${projects}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/contact.html'><p class='shop'>${contact}</p></a>`)
let navTemplate = Handlebars.compile(nav)
