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
$('#nav-main').append(`<a class='link' href = '../pages/home.html'><p class='nav'>${home}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/about.html'><p class='nav'>${about}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/collection.html'><p class='nav'>${collection}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/projects.html'><p class='nav'>${projects}</p></a>`)
$('#nav-main').append(`<a class='link' href = '../pages/contact.html'><p class='nav'>${contact}</p></a>`)
let navTemplate = Handlebars.compile(nav)
